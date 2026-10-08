'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const temp = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  21: 'Twenty One',
  22: 'Twenty Two',
  23: 'Twenty Three',
  24: 'Twenty Four',
  25: 'Twenty Five',
};

type Rect = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type GalleryItemHandle = {
  measure: () => void;
  updateScale: (mouseX: number, mouseY: number, reducedMotion: boolean) => void;
  reset: () => void;
};

type GalleryItemProps = {
  id: string;
  text: string;
};

const GalleryItem = forwardRef<GalleryItemHandle, GalleryItemProps>(
  ({ id, text }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const rectRef = useRef<Rect | null>(null);

    const scale = useMotionValue(1);

    const smoothScale = useSpring(scale, {
      stiffness: 300,
      damping: 25,
      mass: 0.4,
    });

    useImperativeHandle(ref, () => ({
      measure() {
        const element = containerRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();

        rectRef.current = {
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom,
        };
      },

      updateScale(mouseX, mouseY, reducedMotion) {
        const rect = rectRef.current;

        if (!rect) return;

        /*
         * Reduced motion:
         *
         * Only scale when the cursor is actually
         * inside this image.
         */
        if (reducedMotion) {
          const isHovered =
            mouseX >= rect.left &&
            mouseX <= rect.right &&
            mouseY >= rect.top &&
            mouseY <= rect.bottom;

          scale.set(isHovered ? 1.03 : 1);

          return;
        }

        /*
         * Normal interaction.
         *
         * The image begins reacting within 120px.
         */
        const influenceRadius = 120;

        /*
         * Find the closest point on the rectangle
         * to the cursor.
         */
        const closestX = Math.max(rect.left, Math.min(mouseX, rect.right));

        const closestY = Math.max(rect.top, Math.min(mouseY, rect.bottom));

        const dx = mouseX - closestX;
        const dy = mouseY - closestY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        /*
         * Cursor is outside the influence radius.
         */
        if (distance >= influenceRadius) {
          scale.set(1);
          return;
        }

        /*
         * Convert distance into 0 → 1.
         */
        const proximity = 1 - distance / influenceRadius;

        /*
         * Smooth the falloff.
         */
        const easedProximity = proximity * proximity;

        /*
         * Normal maximum scale.
         */
        const minScale = 1;
        const maxScale = 1.15;

        const nextScale = minScale + easedProximity * (maxScale - minScale);

        scale.set(nextScale);
      },

      reset() {
        scale.set(1);
      },
    }));

    return (
      <div
        ref={containerRef}
        className="bg-amber-600 w-full h-60 flex items-center justify-center p-5"
      >
        <motion.div
          className="bg-green-400 w-full h-full grid place-items-center"
          style={{
            scale: smoothScale,
          }}
        >
          {text}
        </motion.div>
      </div>
    );
  },
);

GalleryItem.displayName = 'GalleryItem';

const Gallery = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const itemRefs = useRef<Record<string, GalleryItemHandle | null>>({});

  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const animationFrame = useRef<number | null>(null);

  const cursorInside = useRef(false);

  const lastCursor = useRef({
    x: -1000,
    y: -1000,
  });

  /*
   * Check the user's reduced-motion preference.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  /*
   * Measure every item.
   */
  const measureItems = () => {
    Object.values(itemRefs.current).forEach(item => {
      item?.measure();
    });
  };

  /*
   * Update every item's scale.
   */
  const updateItems = () => {
    animationFrame.current = null;

    if (!cursorInside.current) return;

    const mouseX = cursorX.get();
    const mouseY = cursorY.get();

    Object.values(itemRefs.current).forEach(item => {
      item?.updateScale(mouseX, mouseY, prefersReducedMotion);
    });
  };

  /*
   * Schedule one update per animation frame.
   */
  const scheduleUpdate = () => {
    if (animationFrame.current !== null) {
      return;
    }

    animationFrame.current = requestAnimationFrame(updateItems);
  };

  /*
   * Initial measurement + resize.
   */
  useEffect(() => {
    measureItems();

    let resizeFrame: number | null = null;

    const handleResize = () => {
      if (resizeFrame !== null) {
        cancelAnimationFrame(resizeFrame);
      }

      resizeFrame = requestAnimationFrame(() => {
        measureItems();

        if (cursorInside.current) {
          scheduleUpdate();
        }
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);

      if (resizeFrame !== null) {
        cancelAnimationFrame(resizeFrame);
      }
    };
  }, []);

  /*
   * Scroll invalidates getBoundingClientRect()
   * because the values are viewport-relative.
   */
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        measureItems();

        if (cursorInside.current) {
          scheduleUpdate();
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  /*
   * Pointer movement.
   */
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (x === lastCursor.current.x && y === lastCursor.current.y) {
        return;
      }

      lastCursor.current.x = x;
      lastCursor.current.y = y;

      cursorX.set(x);
      cursorY.set(y);

      cursorInside.current = true;

      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      cursorInside.current = false;

      cursorX.set(-1000);
      cursorY.set(-1000);

      Object.values(itemRefs.current).forEach(item => {
        item?.reset();
      });
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);

      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  /*
   * Clean up animation frame.
   */
  useEffect(() => {
    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen p-7 bg-purple-300 flex">
      <div className="bg-fuchsia-400 w-full grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] gap-8 items-center justify-items-center">
        {Object.entries(temp).map(([key, item]) => (
          <GalleryItem
            key={key}
            id={key}
            text={item}
            ref={element => {
              itemRefs.current[key] = element;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
