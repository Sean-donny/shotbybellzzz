import Image from 'next/image';
import HeroImage from '@/public/bellzzz_with_the_cam.jpg';
import Hero from './(Home)/(Hero)/hero';
import Projects from './(Home)/(Projects)/Projects';
import Gallery from './(Home)/(Gallery)/Gallery';
import Contact from './(Home)/(Contact)/Contact';
import About from './(Home)/(About)/About';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Hero></Hero>
      <Projects></Projects>
      <Gallery></Gallery>
      <Contact></Contact>
      <About></About>
    </div>
  );
}
