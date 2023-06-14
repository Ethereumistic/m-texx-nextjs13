"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);


    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
  
        if (scrollPosition > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
  
        // calculate the scroll progress
        if(totalHeight > 0){
          setScrollProgress((scrollPosition / totalHeight) * 100);
        }
      };
  
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, []);
  

  
    return (
      <div>
<nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500 ${scroll ? 'p-0' : 'p-2'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="M-Texx Logo"
                  className={`py-4 transition-all duration-500 ${scroll ? 'w-32' : 'w-40'}`}
                  width={2}
                  height={2}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {/* Add more menu items using Link components */}
              <Link href="/" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                ЗА НАС
              </Link>
              <Link href="/news" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                НОВИНИ
              </Link>
              <Link href="/recycling" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                РЕЦИКЛИРАНЕ
              </Link>
              <Link href="/locations" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                ЛОКАЦИИ
              </Link>
              <Link href="/partners" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                PARTNERS
              </Link>
              <Link href="/druzet" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                ДРУЗЕТ
              </Link>
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
          <Link href="/" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                ЗА НАС
              </Link>
              <Link href="/news" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                НОВИНИ
              </Link>
              <Link href="/recycling" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                РЕЦИКЛИРАНЕ
              </Link>
              <Link href="/" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                ЛОКАЦИИ
              </Link>
              <Link href="/" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                PARTNERS
              </Link>
              <Link href="/" className={`text-green-800 hover:text-green-300 block px-3 py-2 rounded-md text-base transition-all duration-500 ${scroll ? 'font-extrabold' : 'font-black'}`}>
                ДРУЗЕТ
              </Link>
        </div>
      </div>
      <div className={`relative w-full h-full ${scroll ? 'p-0' : 'p-2'}`}>
          {/* The rest of your navigation code... */}
          <div
            className="absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-500"
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>
    </nav>
</div>
      )
      }

      export default Navbar;