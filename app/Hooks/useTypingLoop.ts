'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { generateRandomInt } from '@/app/Utils/math';

/**
 * Timing configuration for the typing animation.
 */
export const TYPING_SPEED = {
  SLOW: 140,
  FAST: 80,
  PAUSE: 800,
  DELETE: 40,
} as const;

export type TypingSpeed = typeof TYPING_SPEED;

/**
 * Defines how a single typing step behaves.
 *
 * CHARS = number of characters revealed.
 * SPEED = delay before the next step.
 */
export type TypingBehaviour = Readonly<{
  CHARS: number;
  SPEED: number;
}>;

/**
 * Built-in typing behaviours used to avoid an overly mechanical rhythm.
 */
export const TYPING_BEHAVIOUR = {
  HUNT1: {
    CHARS: 0,
    SPEED: TYPING_SPEED.SLOW,
  },

  HUNT2: {
    CHARS: 0,
    SPEED: TYPING_SPEED.FAST,
  },

  PECK1: {
    CHARS: 1,
    SPEED: TYPING_SPEED.SLOW,
  },

  PECK2: {
    CHARS: 1,
    SPEED: TYPING_SPEED.FAST,
  },
} as const;

/**
 * Broad purpose of the current animation.
 */
export type TypingAnimationMode = 'hover' | 'returning' | 'idle';

/**
 * Concrete operation currently taking place.
 */
export type TypingAnimationPhase = 'typing' | 'deleting' | 'pause' | 'idle';

/**
 * Simplified semantic status useful for styling and data attributes.
 */
export type TypingAnimationStatus =
  | 'typing'
  | 'deleting'
  | 'pause'
  | 'returning'
  | 'idle';

/**
 * Public animation snapshot.
 *
 * The mutable animation engine lives in a ref internally. This snapshot
 * is exposed to React consumers when a meaningful state transition occurs.
 */
export type TypingAnimationState = {
  mode: TypingAnimationMode;
  phase: TypingAnimationPhase;
  status: TypingAnimationStatus;

  /** Word currently being typed or deleted. */
  targetWord: string;

  /** Current character position within targetWord. */
  index: number;

  /** Current target word's index in the supplied words array. */
  wordIndex: number;

  /** Whether the animation currently has active work. */
  isActive: boolean;

  /** Convenience state flags for consumers. */
  isTyping: boolean;
  isDeleting: boolean;
  isReturning: boolean;
};

type InternalAnimationState = {
  mode: TypingAnimationMode;
  phase: TypingAnimationPhase;
  wordIndex: number;
  targetWord: string;
  index: number;
};

export type UseTypingLoopOptions = {
  /**
   * Words to cycle through.
   *
   * The first item is used as the default unless defaultWord is supplied.
   */
  words: readonly string[];

  /**
   * Word the animation settles on when inactive.
   */
  defaultWord?: string;

  /**
   * Typing/deleting timing configuration.
   */
  speed?: TypingSpeed;

  /**
   * Available typing behaviours.
   */
  behaviour?: typeof TYPING_BEHAVIOUR;

  /**
   * Optional custom behaviour selector.
   *
   * Useful when another consumer needs deterministic or bespoke typing.
   */
  pickBehaviour?: () => TypingBehaviour;

  /**
   * Controls whether the animation engine is permitted to run.
   *
   * This is intended to be driven by user preferences such as
   * prefers-reduced-motion.
   */
  enabled?: boolean;
};

export type UseTypingLoopReturn = {
  /** Text currently intended for visual rendering. */
  currentWord: string;

  /** Current public animation state. */
  animation: TypingAnimationState;

  /** Call when the interactive target is entered. */
  handleEnter: () => void;

  /** Call when the interactive target is left. */
  handleLeave: () => void;
};

/**
 * Provides an interruptible, hover-driven typing animation.
 *
 * The animation is purely presentational and is therefore safe to disable
 * entirely when the user prefers reduced motion.
 *
 * Leave behaviour:
 *
 * - Non-default word:
 *   delete from the current visible position, then type the default.
 *
 * - Default word while typing:
 *   finish typing it.
 *
 * - Default word while deleting:
 *   reverse direction and rebuild it.
 *
 * The hook has no knowledge of JSX or visual presentation.
 */
export const useTypingLoop = ({
  words,
  defaultWord = words[0],
  speed = TYPING_SPEED,
  behaviour = TYPING_BEHAVIOUR,
  pickBehaviour: customPickBehaviour,
  enabled = true,
}: UseTypingLoopOptions): UseTypingLoopReturn => {
  if (words.length === 0) {
    throw new Error('useTypingLoop requires at least one word.');
  }

  if (!words.includes(defaultWord)) {
    throw new Error('useTypingLoop defaultWord must exist in words.');
  }

  const defaultWordIndex = words.indexOf(defaultWord);

  const [currentWord, setCurrentWord] = useState(defaultWord);

  /**
   * React-facing snapshot of the animation engine.
   */
  const [animation, setAnimation] = useState<TypingAnimationState>(() => ({
    mode: 'idle',
    phase: 'idle',
    status: 'idle',

    targetWord: defaultWord,
    index: defaultWord.length,
    wordIndex: defaultWordIndex,

    isActive: false,
    isTyping: false,
    isDeleting: false,
    isReturning: false,
  }));

  const isHoveringRef = useRef(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Mutable source of truth used by asynchronous animation callbacks.
   */
  const animationRef = useRef<InternalAnimationState>({
    mode: 'idle',
    phase: 'idle',
    wordIndex: defaultWordIndex,
    targetWord: defaultWord,
    index: defaultWord.length,
  });

  /**
   * Allows scheduled callbacks to execute the latest tick implementation
   * rather than retaining stale callback closures.
   */
  const tickRef = useRef<() => void>(() => undefined);

  /**
   * Publishes the internal animation state to React consumers.
   */
  const publishAnimation = useCallback(() => {
    const current = animationRef.current;

    const isReturning = current.mode === 'returning';

    const isTyping = current.phase === 'typing' && !isReturning;

    const isDeleting = current.phase === 'deleting' && !isReturning;

    let status: TypingAnimationStatus = 'idle';

    if (isReturning) {
      status = 'returning';
    } else if (current.phase === 'typing') {
      status = 'typing';
    } else if (current.phase === 'deleting') {
      status = 'deleting';
    } else if (current.phase === 'pause') {
      status = 'pause';
    }

    setAnimation({
      mode: current.mode,
      phase: current.phase,
      status,

      targetWord: current.targetWord,
      index: current.index,
      wordIndex: current.wordIndex,

      isActive: current.mode !== 'idle',
      isTyping,
      isDeleting,
      isReturning,
    });
  }, []);

  /**
   * Cancel the currently scheduled animation step.
   */
  const clearPending = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  /**
   * Schedule exactly one future animation step.
   */
  const schedule = useCallback(
    (callback: () => void, delay: number) => {
      clearPending();

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        callback();
      }, delay);
    },
    [clearPending],
  );

  /**
   * Select the next typing behaviour.
   */
  const pickTypingBehaviour = useCallback((): TypingBehaviour => {
    if (customPickBehaviour) {
      return customPickBehaviour();
    }

    const n = generateRandomInt(1, 4, 3, 0.5);

    switch (n) {
      case 1:
        return behaviour.HUNT1;

      case 2:
        return behaviour.HUNT2;

      case 3:
        return behaviour.PECK1;

      default:
        return behaviour.PECK2;
    }
  }, [behaviour, customPickBehaviour]);

  /**
   * Start a normal hover cycle.
   */
  const startHoverLoop = useCallback(() => {
    const current = animationRef.current;

    current.mode = 'hover';
    current.phase = 'deleting';
    current.wordIndex = defaultWordIndex;
    current.targetWord = defaultWord;
    current.index = defaultWord.length;

    publishAnimation();
    tickRef.current();
  }, [defaultWord, defaultWordIndex, publishAnimation]);

  /**
   * Return the engine to its stable default state.
   */
  const finishReturn = useCallback(() => {
    const current = animationRef.current;

    current.mode = 'idle';
    current.phase = 'idle';
    current.wordIndex = defaultWordIndex;
    current.targetWord = defaultWord;
    current.index = defaultWord.length;

    setCurrentWord(defaultWord);
    publishAnimation();

    /*
     * If the user re-entered while we were returning, immediately begin
     * the normal cycle once the default word is settled.
     */
    if (isHoveringRef.current && enabled) {
      startHoverLoop();
    }
  }, [
    defaultWord,
    defaultWordIndex,
    enabled,
    publishAnimation,
    startHoverLoop,
  ]);

  /**
   * Execute one animation step.
   */
  const tick = useCallback(() => {
    const current = animationRef.current;

    if (!enabled || current.mode === 'idle') {
      return;
    }

    /*
     * Normal hover animation stops when the pointer leaves.
     *
     * Returning mode deliberately ignores this because its purpose is to
     * cleanly settle on the default after the interaction has ended.
     */
    if (current.mode === 'hover' && !isHoveringRef.current) {
      return;
    }

    // ------------------------------------------------------------
    // TYPING
    // ------------------------------------------------------------

    if (current.phase === 'typing') {
      if (current.index >= current.targetWord.length) {
        if (current.mode === 'returning') {
          finishReturn();
          return;
        }

        current.phase = 'pause';
        publishAnimation();

        schedule(() => {
          const state = animationRef.current;

          if (state.mode !== 'hover' || !isHoveringRef.current) {
            return;
          }

          state.phase = 'deleting';
          publishAnimation();
          tickRef.current();
        }, speed.PAUSE);

        return;
      }

      const step = pickTypingBehaviour();

      current.index = Math.min(
        current.index + step.CHARS,
        current.targetWord.length,
      );

      setCurrentWord(current.targetWord.slice(0, current.index));

      publishAnimation();

      /*
       * A typing step may have revealed the final character.
       */
      if (current.index >= current.targetWord.length) {
        if (current.mode === 'returning') {
          finishReturn();
          return;
        }

        current.phase = 'pause';
        publishAnimation();

        schedule(() => {
          const state = animationRef.current;

          if (state.mode !== 'hover' || !isHoveringRef.current) {
            return;
          }

          state.phase = 'deleting';
          publishAnimation();
          tickRef.current();
        }, speed.PAUSE);

        return;
      }

      schedule(() => tickRef.current(), step.SPEED);

      return;
    }

    // ------------------------------------------------------------
    // DELETING
    // ------------------------------------------------------------

    if (current.phase === 'deleting') {
      if (current.index > 0) {
        current.index--;

        setCurrentWord(current.targetWord.slice(0, current.index));

        publishAnimation();
      }

      if (current.index > 0) {
        schedule(() => tickRef.current(), speed.DELETE);

        return;
      }

      /*
       * User left while a non-default word was active.
       * Once cleared, begin constructing the default.
       */
      if (current.mode === 'returning') {
        if (current.targetWord !== defaultWord) {
          current.targetWord = defaultWord;
          current.wordIndex = defaultWordIndex;
          current.phase = 'typing';
          current.index = 0;

          setCurrentWord('');
          publishAnimation();
          tickRef.current();

          return;
        }

        /*
         * Default word was itself being deleted.
         * Reverse and reconstruct it.
         */
        current.phase = 'typing';
        current.index = 0;

        setCurrentWord('');
        publishAnimation();
        tickRef.current();

        return;
      }

      /*
       * Normal cycle: move to the next word.
       */
      current.wordIndex = (current.wordIndex + 1) % words.length;

      current.targetWord = words[current.wordIndex];

      current.phase = 'typing';
      current.index = 0;

      setCurrentWord('');
      publishAnimation();
      tickRef.current();
    }
  }, [
    defaultWord,
    defaultWordIndex,
    enabled,
    finishReturn,
    pickTypingBehaviour,
    publishAnimation,
    schedule,
    speed,
    words,
  ]);

  /*
   * Scheduled callbacks always resolve the current implementation.
   */
  tickRef.current = tick;

  const handleEnter = useCallback(() => {
    /*
     * Reduced-motion users should simply receive the stable default state.
     */
    if (!enabled) {
      return;
    }

    if (isHoveringRef.current) {
      return;
    }

    isHoveringRef.current = true;

    /*
     * Don't interrupt a return-to-default animation.
     */
    if (animationRef.current.mode === 'returning') {
      return;
    }

    startHoverLoop();
  }, [enabled, startHoverLoop]);

  const handleLeave = useCallback(() => {
    if (!enabled) {
      return;
    }

    isHoveringRef.current = false;
    clearPending();

    const current = animationRef.current;

    if (current.mode === 'idle') {
      return;
    }

    /*
     * The default word gets special handling:
     *
     * typing   -> finish it
     * deleting -> reverse it
     * pause     -> leave it alone
     */
    if (current.targetWord === defaultWord) {
      if (current.phase === 'typing') {
        current.mode = 'returning';

        publishAnimation();
        tickRef.current();

        return;
      }

      if (current.phase === 'deleting') {
        current.mode = 'returning';
        current.phase = 'typing';

        publishAnimation();
        tickRef.current();

        return;
      }

      if (current.phase === 'pause') {
        current.mode = 'idle';
        current.phase = 'idle';

        publishAnimation();

        return;
      }
    }

    /*
     * A non-default word is always cleaned up before reconstructing
     * the default word.
     */
    current.mode = 'returning';
    current.phase = 'deleting';

    publishAnimation();
    tickRef.current();
  }, [clearPending, defaultWord, enabled, publishAnimation]);

  /**
   * Disabling the animation should immediately settle the visual state.
   *
   * This is particularly important when the visitor changes their
   * reduced-motion preference while the page is already open.
   */
  useEffect(() => {
    if (enabled) {
      return;
    }

    isHoveringRef.current = false;
    clearPending();

    const current = animationRef.current;

    current.mode = 'idle';
    current.phase = 'idle';
    current.wordIndex = defaultWordIndex;
    current.targetWord = defaultWord;
    current.index = defaultWord.length;

    setCurrentWord(defaultWord);
    publishAnimation();
  }, [clearPending, defaultWord, defaultWordIndex, enabled, publishAnimation]);

  /**
   * Ensure no scheduled work survives component unmount.
   */
  useEffect(() => {
    return () => {
      isHoveringRef.current = false;
      clearPending();
    };
  }, [clearPending]);

  return {
    currentWord,
    animation,
    handleEnter,
    handleLeave,
  };
};
