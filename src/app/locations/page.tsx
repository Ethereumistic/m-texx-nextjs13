import React from 'react'
import BannerPic from '../components/BannerPic'
import Navbar from '../navbar/page'
import Image from 'next/image'

const Locations = () => {
  return (
    <div>
      <Navbar />
      <BannerPic 
  mediaSource="/M-Texx-box.png" 
  mediaType="image" 
  headingText="НАШИТЕ ЛОКАЦИИ" 
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

<h2 className="text-4xl font-bold text-center text-green-600 mb-4 font-oswald my-10">Над 340 контейнера из България</h2>

<div className="max-w-full mx-3 md:mx-auto xl:-mt-10">
  <Image
    src="/map.svg"
    alt="Your Image"
    layout="responsive"
    width={800}
    height={800}
    className="object-cover rounded-2xl transform md:scale-75"
  />
</div>


    </div>
  )
}

export default Locations
