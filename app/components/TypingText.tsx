'use client';

import { motion } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

type TypingTextProps = {
  /**
   * Text currently rendered by the typing engine.
   */
  text: string;

  /**
   * Longest expected value.
   *
   * Used only to reserve layout space and prevent CLS.
   */
  reservationText: string;

  /**
   * Whether the caret should be visible.
   */
  showCursor?: boolean;

  /**
   * Whether the caret should blink.
   *
   * Typically enabled while the typing engine is paused between words.
   */
  blinkCursor?: boolean;
};

/**
 * Renders dynamically changing text with a trailing caret.
 *
 * The component deliberately separates:
 *
 * 1. The invisible reservation element, which controls layout width.
 * 2. The visible text element, which determines the caret position.
 *
 * This prevents the caret from being positioned relative to the reserved
 * width of the longest word.
 */
const TypingText = ({
  text,
  reservationText,
  showCursor = false,
  blinkCursor = false,
}: TypingTextProps) => {
  /**
   * This element contains ONLY the currently visible text.
   *
   * `inline-block` is intentional: it gives us a reliable, content-sized
   * positioning context for the caret.
   */
  const textRef = useRef<HTMLSpanElement>(null);

  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    const element = textRef.current;

    if (!element) {
      return;
    }

    const updateWidth = () => {
      setTextWidth(element.getBoundingClientRect().width);
    };

    updateWidth();

    /**
     * Keeps the caret synchronised with font/layout changes as well as
     * changes to the current word.
     */
    const observer = new ResizeObserver(updateWidth);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [text]);

  const cursorAnimate = showCursor
    ? blinkCursor
      ? {
          opacity: [1, 0, 1],
        }
      : {
          opacity: 1,
        }
    : {
        opacity: 0,
      };

  return (
    /*
     * This outer grid is responsible ONLY for reserving the maximum width.
     */
    <span className="inline-grid align-baseline">
      {/*
       * Layout reservation.
       *
       * `Photographer` determines the intrinsic width of the grid without
       * being exposed visually or to assistive technology.
       */}
      <span
        aria-hidden="true"
        className="
          invisible
          col-start-1
          row-start-1
          select-none
          whitespace-nowrap
        "
      >
        {reservationText}
      </span>

      {/*
       * The visible content gets its own positioning context.
       *
       * `inline-block` ensures this element is only as wide as `text`.
       */}
      <span
        className="
          relative
          col-start-1
          row-start-1
          inline-block
          whitespace-nowrap
        "
      >
        <span ref={textRef} className="inline-block">
          {text}
        </span>

        <motion.span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-0
            top-1/2
            h-[1em]
            w-px
            -translate-y-1/2
            bg-current
            ml-0.5
          "
          animate={{
            x: textWidth,
            ...cursorAnimate,
          }}
          transition={
            blinkCursor && showCursor
              ? {
                  x: {
                    duration: 0.07,
                    ease: 'easeOut',
                  },
                  opacity: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  },
                }
              : {
                  x: {
                    duration: 0.07,
                    ease: 'easeOut',
                  },
                  opacity: {
                    duration: 0.1,
                    ease: 'easeOut',
                  },
                }
          }
        />
      </span>
    </span>
  );
};

export default TypingText;
