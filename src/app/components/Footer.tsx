import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4 text-center">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full mb-4">
          <nav className="flex flex-wrap justify-center mt-8">
          <Link href="/whatcollect"
                className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:scale-105 hover:text-green-500 cursor-pointer">
    Какво събираме?
  </span>
</Link>
<Link href="/druzet"
        className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:text-green-500 cursor-pointer">
    ДРУЗЕТ
  </span>
</Link>
<Link href="/"
        className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:scale-105 hover:text-green-500 cursor-pointer">
    Любопитни Факти
  </span>
</Link>
<Link href="/"
        className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:scale-105 hover:text-green-500 cursor-pointer">
    Бисквитки
  </span>
</Link>

          </nav>
        </div>
        <div className="w-full mb-4">
          <nav className="flex flex-wrap justify-center">
            <Link href="/"
                    className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaFacebook size={50} />
              </span>
            </Link>
            <Link href="/"
            className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaInstagram size={50} />
              </span>
            </Link>
            <Link href="/"
            className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaTiktok size={50} />
              </span>
            </Link>
            <Link href="/"
            className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaYoutube size={50} />
              </span>
            </Link>
          </nav>
        </div>
        <div className="w-full">
          <address className="text-gray-600 mb-6 sm:text-lg xl:text-xl">
             📃 ул. Индустриална 44, Габрово 5300
          </address>
          <div className='mt-4 text-xl'>
          <a href="mailto:m-texx@abv.bg" className="text-gray-600 hover:text-green-500 hover:underline">
            📧 m-texx@abv.bg
          </a></div><br></br>
          <div className='mt-1 text-xl'>
          <a href="tel:+359876600139" className="text-gray-600 hover:text-green-500 hover:underline">
            ☎️ +359 876 600 139
          </a>
          </div>
          <div className='mt-10'>
          <p className="text-gray-600">© 2023 M-Texx Textile Recycling</p></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



