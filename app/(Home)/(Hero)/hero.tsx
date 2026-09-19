'use client';

import HeroImage from '@/public/bellzzz_with_the_cam.jpg';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

import { use3DTilt } from '@/app/Hooks/use3DTilt';
import {
  TYPING_BEHAVIOUR,
  TYPING_SPEED,
  useTypingLoop,
} from '@/app/Hooks/useTypingLoop';

import TypingText from '@/app/components/TypingText';

/**
 * Visual words used by the animation.
 *
 * `as const` keeps the array readonly and preserves literal types.
 */
const WORDS = [
  'Photographer',
  'Visionary',
  'Storyteller',
  'Genius',
  'Shoota!',
  'Friend',
  '...',
] as const;

/**
 * The stable word displayed outside the animated experience.
 */
const DEFAULT_WORD = WORDS[0];

/**
 * Complete semantic representation of the bio.
 *
 * Screen readers receive this stable content instead of the rapidly
 * changing visual animation.
 *
 * Adjust this copy as the actual bio/content evolves.
 */
const ACCESSIBLE_BIO =
  'Bellzzz is a photographer, visionary, storyteller, genius, and friend.';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  /*
   * `useReducedMotion()` can initially be unresolved during SSR/hydration.
   * Only an explicit `true` disables animation, which keeps the initial
   * server-rendered content stable.
   */
  const animationsEnabled = shouldReduceMotion !== true;

  /*
   * The tilt effect is non-essential motion, so it follows the same
   * user preference as the typing animation.
   */
  const { ref, style } = use3DTilt(animationsEnabled ? 10 : 0);

  const { currentWord, animation, handleEnter, handleLeave } = useTypingLoop({
    words: WORDS,
    defaultWord: DEFAULT_WORD,
    speed: TYPING_SPEED,
    behaviour: TYPING_BEHAVIOUR,
    enabled: animationsEnabled,
  });

  return (
    /*
     * MotionConfig provides a second layer of protection for Framer Motion.
     *
     * Any motion components underneath this tree will automatically respect
     * the visitor's reduced-motion preference.
     */
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen w-full items-center justify-around bg-teal-300">
        <div
          className="flex max-w-full items-center justify-center bg-pink-400 p-20"
          data-animation={animation.mode}
          data-phase={animation.phase}
          data-status={animation.status}
          data-active={animation.isActive}
        >
          <h1 className="text-4xl font-line-jp font-bold">
            {/*
             * Semantic content.
             *
             * This is the representation consumed by screen readers and
             * remains stable regardless of the visual animation.
             */}
            <span className="sr-only">{ACCESSIBLE_BIO}</span>

            {/*
             * Entirely decorative visual representation.
             *
             * Keeping it aria-hidden prevents assistive technology from
             * announcing every intermediate typing/deletion state.
             */}
            <span aria-hidden="true">
              <span>Bellzzz is a </span>

              <TypingText
                text={currentWord}
                reservationText={DEFAULT_WORD}
                showCursor={animationsEnabled && animation.isActive}
                blinkCursor={animationsEnabled && animation.phase === 'pause'}
              />
            </span>
          </h1>
        </div>

        <div>
          <figure
            ref={ref}
            className="
              hero-image-parent
              flex
              h-full
              items-start
              justify-center
              overflow-hidden
            "
            style={{
              ...style,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
            /*
             * This animation is decorative, so it does not create a
             * keyboard focus target of its own.
             */
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <motion.img
              src={HeroImage.src}
              alt="Bellzzz hero photo"
              title="Bellzzz"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={948}
              height={1088}
              className="
                hero-image
                h-auto
                w-full
                object-center
                md:pt-0
              "
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                type: 'spring',
                bounce: 0.3,
                duration: 0.6,
                delay: 0.5,
              }}
            />
          </figure>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Hero;
