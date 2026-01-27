import Image from 'next/image';
import HeroImage from '@/public/bellzzz_with_the_cam.jpg';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0 order-2 lg:order-1">
          <div className="space-y-8 max-w-xl animate-fadeInUp">
            {/* Main heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              <span className="block text-white font-light font-cal-sans">
                Shot by
              </span>
              <span className="block text-blue-500 font-cal-sans font-normal italic mt-2">
                Bellzzz
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md font-light font-serif">
              A photographer telling stories, and capturing moments, through his
              lens
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-blue-500 text-black font-medium tracking-wide overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
              <button className="px-8 py-4 border border-zinc-700 text-white font-medium tracking-wide hover:border-blue-500/50 hover:text-blue-500 transition-all">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative h-[50vh] lg:h-screen order-1 lg:order-2">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-l from-black via-black/50 to-transparent z-10" />

          {/* Image container */}
          <div className="relative h-full w-full">
            <Image
              src={HeroImage}
              alt="Bellzzz with camera capturing the perfect shot"
              fill
              className="object-cover object-center contrast-110 rounded-full"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
