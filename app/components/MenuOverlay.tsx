import Link from 'next/link';
import { useEffect } from 'react';

interface MenuOverlayProps {
  menuOverlayOpen: boolean;
  setMenuOverlayOpen: (open: boolean) => void;
}

const MenuOverlay = ({
  menuOverlayOpen,
  setMenuOverlayOpen,
}: MenuOverlayProps) => {
  const handleHideOverlay = () => {
    document.body.classList.remove('menu-overlay-open');
    setMenuOverlayOpen(false);
  };

  const handleEscKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleHideOverlay();
    }
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleHideOverlay();
    }
  };

  const handleOverlayExit = () => {};

  // Add an effect to handle the body class when the modal opens and closes
  useEffect(() => {
    // Add the 'menu-overlay-open' class to the body when the modal is open
    document.body.classList.add('menu-overlay-open');

    // Remove the 'menu-overlay-open' class from the body when the modal is closed
    return () => {
      document.body.classList.remove('menu-overlay-open');
    };
  }, []);

  return (
    <div
      className={`${!menuOverlayOpen && 'hidden'}`}
      onKeyDown={handleEscKeyDown}
    >
      <div
        className="w-full min-h-screen fixed inset-0 z-999 bg-green-400 block overflow-hidden px-20 pb-20"
        aria-modal="true"
        role="dialog"
      >
        <nav className="flex justify-center items-center w-full h-full bg-amber-600">
          <ul className="bg-green-300 flex flex-col justify-between items-start">
            <li
              onClick={handleHideOverlay}
              onKeyDown={handleEnterKeyDown}
              className="py-5 px-2 my-0.5 bg-blue-400"
            >
              <Link
                href={'/projects'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>Projects</p>
              </Link>
            </li>
            <li
              onClick={handleHideOverlay}
              onKeyDown={handleEnterKeyDown}
              className="py-5 px-2 my-0.5 bg-blue-400"
            >
              <Link
                href={'/gallery'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>Gallery</p>
              </Link>
            </li>
            <li
              onClick={handleHideOverlay}
              onKeyDown={handleEnterKeyDown}
              className="py-5 px-2 my-0.5 bg-blue-400"
            >
              <Link
                href={'/contact'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>Contact</p>
              </Link>
            </li>
            <li
              onClick={handleHideOverlay}
              onKeyDown={handleEnterKeyDown}
              className="py-5 px-2 my-0.5 bg-blue-400"
            >
              <Link
                href={'/about'}
                className="text-black cursor-pointer text-base hover:opacity-30"
              >
                <p>About</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuOverlay;
