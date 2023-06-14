"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed w-full transition-all duration-500 ${
        isScrolled ? 'bg-green-400 h-20' : 'bg-transparent h-32'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="M-Texx Logo"
                  className={`py-4 ${isScrolled ? 'h-8' : 'h-24'}`}
                  width={224}
                  height={24}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {/* Add more menu items using Link components */}
                <Link
                  href="/"
                  className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                    isScrolled ? 'text-white' : ''
                  }`}
                >
                  ЗА НАС
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Add mobile menu items using Link components */}
          <Link
            href="/"
            className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? 'text-white' : ''
            }`}
          >
            ЗА НАС
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
