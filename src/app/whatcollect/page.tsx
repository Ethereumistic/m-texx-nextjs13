import React from 'react'
import BannerPic from '../components/BannerPic'
import Navbar from '../navbar/page'
import Footer from '../components/Footer'

const whatCollect = () => {
  return (
    <div>
        <Navbar />
        <BannerPic 
  mediaSource="/whatcollect.jpg" 
  mediaType="image" 
  headingText="Какво Събираме?" 
  buttonText="" 
  linkUrl="#" 
  height="666px"
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

    <div className="p-4 sm:p-8 bg-white  rounded-md shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-4 text-green-600 font-oswald">M-Texx събира следните материали:</h2>
      <ul className="font-oswald text-xl sm:text-2xl text-gray-600 mx-auto my-10 sm:max-w-xl xl:max-w-4xl list-disc pl-5">
        <li>Чисти дрехи</li>
        <li>Чисти обувки</li>
        <li>Чисто домакинско бельо (напр. спално бельо, кърпи, завеси)</li>
        <li>Играчки, меки играчки</li>
        <li>Аксесоари (Напр. колани и чанти)</li>
        <li>Моля, НЕ предоставяйте мръсни, зацапани, скъсани, мухлясали и мокри предмети</li>
        <li>Моля, НЕ предоставяйте тъкани, килими, книги, кухненски съдове, канцеларски материали</li>

      </ul>
      </div>
      
      <div className='text-center'>
      <Footer />
      </div>


    </div>
  )
}

export default whatCollect