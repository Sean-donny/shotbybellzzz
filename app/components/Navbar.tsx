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

  return (
    <>
      <nav className="w-full px-5 py-2 z-1000 fixed">
        <div className="w-full max-w-xl m-auto">
          <ul className="font-line-jp font-semibold flex justify-between flex-row">
            <li onClick={handleHideOverlay}>
              <Link href={'/'} className="cursor-pointer hover:opacity-30">
                {/** TODO: Replace with Bellzzz icon */}
                <Image
                  width={30}
                  height={30}
                  src={footerImage}
                  alt="Shot by Bellzzz logo"
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
              className="navbar-mobile-button"
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
          </ul>
        </div>
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
