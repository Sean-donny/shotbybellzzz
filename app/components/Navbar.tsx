'use client';
import Link from 'next/link';
import Image from 'next/image';
import footerImage from '../favicon.ico';
import MenuOverlay from './MenuOverlay';
import { useState } from 'react';

const Navbar = () => {
  const menuButtonText = { option1: 'Menu', option2: 'Close' };
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);

  const handleHideOverlay = () => {
    document.body.classList.remove('menu-overlay-open');
    setMenuOverlayOpen(false);
  };

  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // useEffect(()=>{
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   }
  //   document.addEventListener("resize", handleResize)

  //   return document.removeEventListener("resize", handleResize )

  // },[])
  return (
    <>
      <nav className="w-full px-5 py-2 bg-slate-300/50 z-1000 fixed">
        <ul className="w-full max-w-xl m-auto bg-amber-300/50">
          <div className="font-line-jp flex justify-between flex-row">
            <li onClick={handleHideOverlay}>
              <Link href={'/'} className="cursor-pointer hover:opacity-30">
                {/** TODO: Replace with designer's icon */}
                <Image
                  width={30}
                  height={30}
                  src={footerImage}
                  alt="Logo showing that this website was designed by Sean Donny"
                />
              </Link>
            </li>
            <li className="navbar-large-button">
              <Link
                href={'/projects'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>Projects</p>
              </Link>
            </li>
            <li className="navbar-large-button">
              <Link
                href={'/gallery'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>Gallery</p>
              </Link>
            </li>
            <li className="navbar-large-button">
              <Link
                href={'/contact'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>Contact</p>
              </Link>
            </li>
            <li className="navbar-large-button">
              <Link
                href={'/about'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>About</p>
              </Link>
            </li>
            <li
              className="bg-pink-400 navbar-mobile-button"
              onClick={() => {
                setMenuOverlayOpen(prev => !prev);
              }}
            >
              <button className="text-black cursor-pointer text-base hover:opacity-30">
                <p>
                  {menuOverlayOpen
                    ? menuButtonText.option2
                    : menuButtonText.option1}
                </p>
              </button>
            </li>
          </div>
        </ul>
      </nav>
      {menuOverlayOpen && (
        <MenuOverlay
          menuOverlayOpen={menuOverlayOpen}
          setMenuOverlayOpen={setMenuOverlayOpen}
        />
      )}
    </>
  );
};

export default Navbar;
