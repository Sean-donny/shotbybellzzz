'use client';
import HeroImage from '@/public/bellzzz_with_the_cam.jpg';
import { motion, useAnimationControls } from 'framer-motion';
import { use3DTilt } from '@/app/Hooks/use3DTilt';
import { useRef, useState } from 'react';

const Hero = () => {
  const { ref, style } = use3DTilt(10);
  const heroBiographyDictionary: string[] = [
    'Photographer',
    'Visionary',
    'Storyteller',
    'Genius',
    'Shoota!',
    'Friend',
    '...',
  ];

  const [bioActive, setBioActive] = useState<boolean>(false);
  const currentBioStep = useRef(heroBiographyDictionary[0]);
  const controls = useAnimationControls();

  const runBioAnimationCycle = async () => {
    while (true) {
      for (let i = 0; i < heroBiographyDictionary.length; i++) {
        currentBioStep.current = heroBiographyDictionary[i];
        await controls.start({
          string: `${''}`,
          transitionDelay: 0.1,
        });
      }
    }
  };

  const handleActivateBio = () => {
    runBioAnimationCycle();
  };

  const handleDeactivateBio = () => {
    if (currentBioStep.current === heroBiographyDictionary[0]) return;
    controls
      .start({
        string: `${''}`,
        transitionDelay: 0.1,
      })
      .then(() => (currentBioStep.current = heroBiographyDictionary[0]));
  };

  const handleBiographyDefinition: () => string = () => {
    // Take in the words and type them out in a natural looking way
    //@param string[]
    // Use setTimeout to count down as soon as function is called, split word into "chunks" and remove the last element from the list after the timeout
    // When a user leaves, the function should go back to the first word, but while hovering the entire list cycles
    // Typing behaviour is split into 5 behaviours: 1. Hunt1: 0 chars - slow speed 2. Hunt2: 0 chars - fast speed 3. Peck1: 1 char - slow speed 4. Peck2: 1 char - fast speed 5. Burst: 2-4 chars - fast speed
    return '';
  };

  return (
    <div className="w-full min-h-screen bg-teal-300 flex justify-around items-center">
      <div className="flex justify-center items-center">
        <h1>
          <span>Bellzzz is a</span>{' '}
          <span
          //  onMouseOver={}
          //  onMouseLeave={}
          >
            {bioActive
              ? heroBiographyDictionary[0]
              : handleBiographyDefinition()}
          </span>
        </h1>
      </div>
      <div>
        {/* <figure>
          <Image
            width={100}
            height={100}
            alt="Bellzzz hero photo"
            src={HeroImage}
          />
        </figure> */}
        <figure
          className="hero-image-parent flex items-start justify-center h-full overflow-hidden"
          ref={ref}
          style={{
            ...style,
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          <motion.img
            src={HeroImage.src}
            alt="Bellzzz hero photo"
            title="Bellzzz"
            loading="eager"
            className="hero-image object-center h-auto w-full cursor-pointer md:pt-0"
            //   onClick={}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              bounce: 0.3,
              duration: 0.6,
              delay: 0.5,
            }}
            fetchPriority="high"
            decoding="async"
            width={948}
            height={1088}
          />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
