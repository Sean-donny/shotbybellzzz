import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/'}>
            <p>ShotByBellzzz</p>
          </Link>
        </li>
        <li>
          <Link href={'/projects'}>
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link href={'/gallery'}>
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link href={'/contact'}>
            <p>Contact</p>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <p>About</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
