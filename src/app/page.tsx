"use client";
import Image from 'next/image';
import { useState } from 'react';
import Navbar from './navbar/page';
import BannerPic from './components/BannerPic';
import './globals.css';
import Footer from './components/Footer';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
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
      <div className="p-4 sm:p-8 bg-white text-green-600 rounded-md shadow-lg text-center">
    <h2 className="text-4xl font-bold text-center mb-4 font-oswald">Запази околната среда, чрез преизползване, рециклиране и ...</h2>
      <p className="font-oswald text-base sm:text-5xl lg:text-2x1 xl:text-3xl mb-8 text-black">
        През 2022г. България е генерирала повече от 100 000 тона текстилни и кожени отпадъци, но само 2% от този отпадък се рециклира.<br></br>
        Ние целим да предоставим безплатно рециклиране като услуга на домакинства и организации в България и да насърчим за преизползването,<br></br>
        рециклирането и намаляване на използването, чрез образование, с акцент върху ангажирането на младежите в училищата.<br></br></p>
    </div>

      <BannerPic 
  mediaSource="/blog.jpg" 
  mediaType="image" 
  headingText="Тук може да прочетете повече информация за рециклиране, устойчив начин на живот и..." 
  buttonText="РАЗБЕРИ ПОВЕЧЕ" 
  linkUrl="/news" 
  height="500px"
  showButton={true}
  showText={true}
  zoom={1}
  navbarHeight="0px"
  headingPaddingTop = '0px'
  headingPaddingBottom = '48px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '10px'
  buttonPaddingBottom = '10px'
  buttonPaddingLeft = '10px'
  buttonPaddingRight = '10px'
  headingFontSize = '4xl md:text-2xl lg:text-4xl'
  buttonFontSize = 'text-sm md:text-base lg:text-sm'

/>


      </div>
  )
}
