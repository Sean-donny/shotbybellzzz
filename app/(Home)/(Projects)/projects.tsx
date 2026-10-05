'use client';

import Image from 'next/image';
import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlbumNames, projectAlbumData } from './data';

/* -------------------------------------------------------------------------- */
/*  Static setup (module scope, so it isn't recomputed on every render)        */
/* -------------------------------------------------------------------------- */

const PROJECT_KEYS = Object.keys(projectAlbumData) as AlbumNames[];
const TOTAL = PROJECT_KEYS.length;

/**
 * Cover strip geometry, measured from the mockup:
 * covers are ~155px squares, each overlapping its neighbour by ~38%,
 * and a hovered cover lifts by ~28% of its own height.
 */
const COVER_OVERLAP = 0.383;
const COVER_LIFT = '-28%';
const STRIP_WIDTH_IN_COVERS = 1 + (TOTAL - 1) * (1 - COVER_OVERLAP);

/**
 * Tailwind's JIT only generates classes that appear as COMPLETE strings in
 * source. `font-${name}` never does, so every font class is spelled out here.
 */
const FONTS: Record<string, string> = {
  'cal-sans': 'font-cal-sans',
  boldonese: 'font-boldonese',
  'line-jp': 'font-line-jp',
};
const fontFor = (name?: string) => FONTS[name ?? ''] ?? '';

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="size-1/2"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

const Projects = () => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const project = projectAlbumData[PROJECT_KEYS[index]];
  const s = project.projectStyling;
  const headingFont = fontFor(s.headingFont);
  const bodyFont = fontFor(s.paragraphBodyFont);
  const ctaFont = fontFor(s.ctaFont);

  const go = (step: 1 | -1) => setIndex(i => (i + step + TOTAL) % TOTAL);

  const navButtonClass =
    'grid size-11 place-items-center rounded-full transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14 lg:size-[4.5rem]';

  const ctaClass =
    bodyFont +
    ' ' +
    'inline-block px-6 py-3 text-base font-semibold tracking-wide transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 md:px-8 md:py-4 md:text-lg lg:px-10';

  return (
    <section
      aria-label="Projects"
      className="flex min-h-dvh w-full flex-col gap-8 px-6 py-8 transition-colors duration-500 selection:bg-(--sel-bg) selection:text-(--sel-fg) md:gap-10 md:px-10 md:py-12"
      style={
        {
          background: s.backgroundColor,
          '--sel-bg': s.selectionBackgroundColor,
          '--sel-fg': s.selectionTextColor,
        } as CSSProperties
      }
    >
      {/* Heading */}
      <h2
        className={`${headingFont} mx-auto max-w-4xl text-balance text-center text-4xl md:text-5xl lg:text-massive2 leading-[0.95] tracking-wide lg:leading-massive2 font-semibold`}
        style={{ color: s.headingColor }}
      >
        {project.projectHeading}
      </h2>

      {/* Artwork + copy */}
      <div className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-stretch md:gap-[clamp(2rem,4vw,4rem)]">
          {/* Artwork with hard offset shadow */}
          <div className="relative isolate mx-auto aspect-square w-full max-w-md md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -bottom-[4%] -left-[3%] -z-10 h-full w-full transition-colors duration-500"
              style={{ backgroundColor: s.imageBackdropColor }}
            />
            <Image
              src={project.projectArtwork}
              alt={project.projectArtworkAlt}
              title={project.projectArtworkTitle}
              fill
              sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Copy column: basic paragraph on top, controls pinned to the bottom edge */}
          <div className="flex flex-col justify-between gap-8">
            <p
              lang="en"
              className={`${bodyFont} text-pretty font-bold text-[clamp(1rem,0.85rem+0.5vw,1.375rem)] leading-[1.8] p-5`}
              style={{
                color: s.paragraphTextColor,
                backgroundColor: s.paragraphBackgroundColor,
              }}
            >
              {project.projectDescription}
            </p>

            <div className="flex items-center justify-between gap-4">
              {/* Nav buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => go(-1)}
                  className={navButtonClass}
                  style={{
                    backgroundColor: s.navButtonFillColor,
                    color: s.navButtonStrokeColor,
                  }}
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => go(1)}
                  className={navButtonClass}
                  style={{
                    backgroundColor: s.navButtonFillColor,
                    color: s.navButtonStrokeColor,
                  }}
                >
                  <ChevronIcon direction="right" />
                </button>
              </div>

              {/* CTA button or placeholder span */}
              {project.projectLink ? (
                <a
                  href={project.projectLink}
                  className={ctaClass}
                  style={{
                    backgroundColor: s.ctaButtonFillColor,
                    color: s.ctaButtonTextColor,
                  }}
                >
                  Explore
                </a>
              ) : (
                <span
                  aria-hidden="true"
                  className={ctaClass}
                  style={{
                    backgroundColor: s.ctaButtonFillColor,
                    color: s.ctaButtonTextColor,
                  }}
                >
                  Explore
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping cover strip */}
      <nav
        aria-label="Project selector"
        className="mx-auto w-full max-w-6xl"
        style={{ containerType: 'inline-size' }}
      >
        <div
          className="flex justify-center"
          style={
            {
              '--cover': `min(9.7rem, calc(100cqw / ${STRIP_WIDTH_IN_COVERS}))`,
              paddingTop: 'calc(var(--cover) * 0.3)',
            } as CSSProperties
          }
        >
          {PROJECT_KEYS.map((key, i) => {
            const p = projectAlbumData[key];
            const isActive = i === index;
            const lift = reduceMotion ? undefined : { y: COVER_LIFT };

            return (
              <motion.button
                key={key}
                type="button"
                aria-label={`Show ${p.projectHeading}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => setIndex(i)}
                whileHover={lift}
                whileFocus={lift}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="relative aspect-square shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  width: 'var(--cover)',
                  marginLeft:
                    i === 0 ? 0 : `calc(var(--cover) * -${COVER_OVERLAP})`,
                  background: p.projectStyling.albumCoverColor,
                }}
              >
                <Image
                  src={p.projectArtwork}
                  alt=""
                  fill
                  sizes="160px"
                  className={`object-cover transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-25'
                  }`}
                />
              </motion.button>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default Projects;
