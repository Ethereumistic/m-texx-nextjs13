"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 md:p-8 transition duration-500 ${
        scroll ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg font-bold text-gray-800">
              Logo
            </Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
