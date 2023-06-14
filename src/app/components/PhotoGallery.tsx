"use client"
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhotoGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleImageClick("right"),
    onSwipedRight: () => handleImageClick("left"),
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images]);

  const handleImageClick = (direction: string) => {
    if (direction === "left") {
      setActiveImage((prevImage) => (prevImage > 0 ? prevImage - 1 : images.length - 1));
    } else if (direction === "right") {
      setActiveImage((prevImage) => (prevImage + 1) % images.length);
    }
  };

  return (
    <div {...handlers} className="relative flex flex-col items-center justify-center w-full h-64 sm:h-96 sm:w-3/5 mx-auto rounded-xl overflow-hidden">
      <img
        src={images[activeImage]}
        alt={`Gallery Image ${activeImage}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex justify-between items-center px-6">
        <FaChevronLeft 
          size={50} 
          onClick={() => handleImageClick("left")} 
          className="cursor-pointer text-gray-500 hover:text-green-500"
        />
        <FaChevronRight 
          size={50} 
          onClick={() => handleImageClick("right")} 
          className="cursor-pointer text-gray-500 hover:text-green-500"
        />
      </div>

      <div className="absolute bottom-0 mb-3 flex justify-center w-full space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full transition-all duration-200 ease-in-out cursor-pointer ${idx === activeImage ? 'bg-green-500 scale-150' : 'bg-gray-300'}`}
            onClick={() => setActiveImage(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;






