'use client';

import HeroImage from '@/public/bellzzz_with_the_cam.jpg';
import Image from 'next/image';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

import { use3DTilt } from '@/app/Hooks/use3DTilt';
import {
  TYPING_BEHAVIOUR,
  TYPING_SPEED,
  useTypingLoop,
} from '@/app/Hooks/useTypingLoop';

import TypingText from '@/app/components/TypingText';

/**
 * Created once at module level so it isn't re-created on every render.
 * Gives us next/image optimisation (srcset, AVIF/WebP) plus Framer Motion.
 * Requires framer-motion v11+ for `motion.create`.
 */
const MotionImage = motion.create(Image);

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
      <div className="hero-container flex w-full bg-teal-300 px-7 pt-(--header-height,3.5rem) pb-7 lg:min-h-full">
        {/*
         * Inner wrapper caps the content width on very wide screens.
         * `minmax(0, …)` stops long words from blowing out the `fr` tracks.
         */}
        <div className="hero-inner mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-8">
          <div className="hero-bio-container flex bg-green-400">
            <div
              className="hero-bio-text-container flex flex-1 items-center-safe bg-pink-500"
              data-animation={animation.mode}
              data-phase={animation.phase}
              data-status={animation.status}
              data-active={animation.isActive}
            >
              <h1 className="font-cal-sans py-2 text-4xl font-semibold tracking-wide md:text-5xl lg:pb-5 lg:pl-5 lg:text-massive2 lg:leading-massive2">
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
                    blinkCursor={
                      animationsEnabled && animation.phase === 'pause'
                    }
                  />
                  {/* Block + balance instead of <br /> so "UK." can't orphan. */}
                  <span className="block text-balance">
                    based in England, UK.
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <div className="hero-image-container p-2 perspective-[1000px]">
            <figure
              ref={ref}
              className="hero-image-parent flex h-full items-start justify-center"
              style={{
                ...style,
                transformStyle: 'preserve-3d',
              }}
              /*
               * Decorative only, so no keyboard focus target. Pointer events
               * with a mouse check avoid a "stuck hover" after touch taps.
               * If your handlers require the event object, pass `e` through.
               */
              onPointerEnter={e => {
                if (e.pointerType === 'mouse') handleEnter();
              }}
              onPointerLeave={e => {
                if (e.pointerType === 'mouse') handleLeave();
              }}
            >
              <MotionImage
                src={HeroImage}
                alt="Bellzzz holding a camera"
                title="Bellzzz"
                priority
                sizes="(min-width: 768px) 40vw, min(100vw, 24rem)"
                className="hero-image h-auto w-full max-w-sm md:max-w-none"
                initial={animationsEnabled ? { scale: 0 } : false}
                animate={{ scale: 1 }}
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
      </div>
    </MotionConfig>
  );
};

export default Hero;
