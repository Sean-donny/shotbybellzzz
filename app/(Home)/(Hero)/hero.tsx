'use client';
import HeroImage from '@/public/bellzzz_with_the_cam.jpg';
import { motion } from 'framer-motion';
import { use3DTilt } from '@/app/Hooks/use3DTilt';

const Hero = () => {
  const { ref, style } = use3DTilt(10);
  return (
    <div className="w-full min-h-screen bg-teal-300 flex justify-around items-center">
      <div className="flex justify-center items-center">
        <h1>Bellzzz is ...</h1>
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
