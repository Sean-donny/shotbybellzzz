import Link from 'next/link';
import Image from 'next/image';
import footerImage from '../favicon.ico';

const Navbar = () => {
  return (
    <nav className="w-full px-5 py-2 z-40 bg-slate-300">
      <ul className="w-full max-w-xl m-auto bg-amber-300">
        <div className="font-line-jp flex justify-between flex-row">
          <li>
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
          <li>
            <Link
              href={'/projects'}
              className="text-black cursor-pointer text-base hover:opacity-30"
            >
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/gallery'}
              className="text-black cursor-pointer text-base hover:opacity-30"
            >
              <p>Gallery</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              className="text-black cursor-pointer text-base hover:opacity-30"
            >
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className="text-black cursor-pointer text-base hover:opacity-30"
            >
              <p>About</p>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
