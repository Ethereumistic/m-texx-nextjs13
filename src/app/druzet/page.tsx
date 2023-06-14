import React from 'react'
import Navbar from '../navbar/page'
import BannerPic from '../bannerpic/page'
import Image from 'next/image'
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';


const Druzet = () => {
  return (
    <div className='text-center'>
        
        <Navbar />
        <BannerPic 
  mediaSource="/druzet.png" 
  mediaType="image" 
  headingText="ДРУЗЕТ" 
  buttonText="" 
  linkUrl="#" 
  height="560px"
  showButton={false}
  showText={true}
  zoom={1}
  navbarHeight="0px"
  headingPaddingTop = '66px'
  headingPaddingBottom = '0px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '0px'
  buttonPaddingBottom = '0px'
  buttonPaddingLeft = '0px'
  buttonPaddingRight = '0px'
  headingFontSize = 'text-4xl sm:text-2xl xl:text-6xl'
  buttonFontSize = 'text-sm md:text-base lg:text-sm'
/>

<div className="max-w-full mx-3 md:mx-auto xl:-mt-48">
  <Image
    src="/druzet-graph.svg"
    alt="Your Image"
    layout="responsive"
    width={800}
    height={800}
    className="object-cover rounded-2xl transform md:scale-75"
  />
</div>

<div className="p-4 sm:p-8  xl:-mt-64 bg-white text-green-600 rounded-md shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-4 font-oswald">Дреб / Друзет</h2>
      <p className="font-oswald text-center mx-auto text-xl xl:text-2xl xl:max-w-2xl mb-8 text-black">
      Дреб (друзет) е текстилна вата, която се получава след разкъсване и разчепване на текстилни материи на тънки и фини влакна. 
      Този продукт се използва широко в различни индустрии, включително в мебелната и автомобилната индустрия, строителството и други. 
      Дреб се използва за пълнеж на мебели, за изолация на сгради и за други подобни приложения, където е необходимо да се 
      използва устойчив и екологично приемлив материал. </p>
    </div>

    <div className='my-6 mx-4'>
    <PhotoGallery images={['/druz1.png', '/druz2.png', '/druz3.png', '/druz4.png', '/druzet.png']} />
    </div>

    <div className=''>
    <div className="p-4 sm:p-8 bg-white  rounded-md shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-4 text-green-600 font-oswald">Допълнителна Информация</h2>
      <h1 className="font-oswald xl:text-2xl sm:text-2xl mx-auto xl:max-w-3xl text-gray-600 font-semibold mb-4">Ние работим с нашите партньори, за да поддържаме текстила в затворен цикъл на рециклиране, продукт като дреб би бил полезен на:</h1>

      <ul className="font-oswald text-xl sm:text-2xl text-gray-600 mx-auto my-10 sm:max-w-3xl xl:max-w-xl list-disc pl-5">
        <li>производители на нетъкан текстил</li>
        <li>производители на дюшеци, матраци, фитнес уреди</li>
        <li>мебелна и автомобилна индустрия</li>
        <li>кино индустрия, театър, моделиране, скулптура</li>
      </ul>


      <h1 className="font-oswald xl:text-2xl sm:text-2xl mx-auto xl:max-w-3xl text-gray-600 mb-4"><span className="font-bold">Дреб / Друзет:</span> - Състав 100%  рециклирани текстилни влакна с неопределен цвят.</h1>
      
<ul className="font-oswald text-xl sm:text-2xl text-gray-600 mx-auto sm:max-w-3xl pl-5">
    <li className="flex items-start custom-list-item">
      <span className="font-bold mt-1 mr-2">Опаковане:</span>
      <span>Бали с тегло около 50-60 кг. и 100-120 кг.</span>
    </li>
    <li className="flex items-start custom-list-item">
      <span className="font-bold mt-1 mr-2">Цена:</span>
      <span>0.60 лв. / кг.</span>
    </li>
  </ul>
    </div>
    </div>
<Footer />
    </div>
  )
}

export default Druzet