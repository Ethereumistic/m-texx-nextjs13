"use client";
import Image from 'next/image';
import { useState } from 'react';
import Navbar from './navbar/page';
import BannerPic from './bannerpic/page';
import SavingPlanet from './savingplanet/page';
import './globals.css';
import Footer from './components/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar />
      <BannerPic 
  mediaSource="/Bg-Video2.mp4" 
  mediaType="video" 
  headingText="Рециклиране на текстил: Втори живот за стари дрехи, първа стъпка към..." 
  buttonText="РЕЦИКЛИРАНЕ НА ТЕКСТИЛ" 
  linkUrl="/recycling" 
  height="800px"
  showButton={true}
  showText={true}
  zoom={1}
  navbarHeight="100px"
  headingPaddingTop = '0px'
  headingPaddingBottom = '18px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '10px'
  buttonPaddingBottom = '10px'
  buttonPaddingLeft = '10px'
  buttonPaddingRight = '10px'
  headingFontSize = '4xl md:text-2xl lg:text-4xl'
  buttonFontSize = 'text-sm md:text-base lg:text-xl'
  
/>
      <SavingPlanet />

      <BannerPic 
  mediaSource="/recycling-bg.png" 
  mediaType="image" 
  headingText="Рециклиране на текстил: Втори живот за стари дрехи, първа стъпка към..." 
  buttonText="РЕЦИКЛИРАНЕ НА ТЕКСТИЛ" 
  linkUrl="#" 
  height="500px"
  showButton={false}
  showText={true}
  zoom={1}
  navbarHeight="0px"
  headingPaddingTop = '0px'
  headingPaddingBottom = '0px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '0px'
  buttonPaddingBottom = '0px'
  buttonPaddingLeft = '0px'
  buttonPaddingRight = '0px'
  headingFontSize = '4xl md:text-2xl lg:text-4xl'
  buttonFontSize = 'text-sm md:text-base lg:text-sm'

/>

<div className='text-center'>
<Footer />
</div>

      </div>
  )
}
