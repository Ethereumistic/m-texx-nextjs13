"use client"
import React from 'react'
import Navbar from '../navbar/page'
import TextBox from '../components/TextBox'

const News = () => {
  return (
    <div>
        
            <Navbar />
            <TextBox 
        header="Welcome to our Website" 
        subheader="Our Mission"
        description="Our mission is to create the best user experiences."
        headerProps={{
          fontSizeBase: '2rem',
          fontSizeSm: '2.5rem',
          fontSizeMd: '3rem',
          fontSizeLg: '3.5rem',
          fontSizeXl: '4rem',
          color: 'blue',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          margin: '80px',
          maxWidth: '800px'
        }}
        subheaderProps={{
          fontSizeBase: '1.5rem',
          fontSizeSm: '2rem',
          fontSizeMd: '2.5rem',
          fontSizeLg: '3rem',
          fontSizeXl: '3.5rem',
          color: 'red',
          fontFamily: 'Verdana',
          fontWeight: 'normal',
          margin: '5px',
          maxWidth: '600px'
        }}
        descriptionProps={{
          fontSizeBase: '1rem',
          fontSizeSm: '1.5rem',
          fontSizeMd: '2rem',
          fontSizeLg: '2.5rem',
          fontSizeXl: '3rem',
          color: 'green',
          fontFamily: 'Courier',
          fontWeight: 'light',
          margin: '2px',
          maxWidth: '400px'
        }}
      />

    </div>
  )
}

export default News