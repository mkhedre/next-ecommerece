import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container flex items-center justify-between py-5 border-b-2 border-gray-700 ">
      <div className="uppercase hover:text-green-300 ">
        <Link href="/">
          <a>thisislogo</a>
        </Link>
      </div>
      <ul className="flex mr-5 space-x-4 capitalize transition-all ">
        <li className=" hover:text-green-300">
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li className="hover:text-green-300">
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li className="hover:text-green-300">
          <Link href="/cart">
            <a>cart</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
