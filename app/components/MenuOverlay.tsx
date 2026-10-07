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

  useEffect(() => {
    if (!menuOverlayOpen) {
      document.body.classList.remove('menu-overlay-open');
      return;
    }

    document.body.classList.add('menu-overlay-open');

    const handleResize = () => {
      if (window.innerWidth >= 480) {
        handleHideOverlay();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleHideOverlay();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('menu-overlay-open');
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOverlayOpen]);

  return (
    <div className={`${!menuOverlayOpen && 'hidden'}`}>
      <div
        className="w-full min-h-screen fixed inset-0 z-999 bg-green-400 block overflow-hidden px-20 pb-20 cursor-pointer"
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <nav className="flex justify-center items-center w-full h-full font-cal-sans text-5xl">
          <ul className="grid justify-between items-start">
            <li onClick={handleHideOverlay} className="py-5 px-2 my-0.5">
              <Link href={'/projects'} className="text-black hover:opacity-30">
                <p>Projects</p>
              </Link>
            </li>
            <li onClick={handleHideOverlay} className="py-5 px-2 my-0.5">
              <Link href={'/gallery'} className="text-black hover:opacity-30">
                <p>Gallery</p>
              </Link>
            </li>
            <li onClick={handleHideOverlay} className="py-5 px-2 my-0.5">
              <Link href={'/contact'} className="text-black hover:opacity-30">
                <p>Contact</p>
              </Link>
            </li>
            <li onClick={handleHideOverlay} className="py-5 px-2 my-0.5">
              <Link href={'/about'} className="text-black hover:opacity-30">
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
