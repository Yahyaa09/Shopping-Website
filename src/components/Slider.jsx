import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Import icons

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0); // Start at the first image

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to handle next and previous image navigation
  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='relative w-screen overflow-x--hidden mx-auto'>
      {/* Dots indicating current image */}
      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              imageIndex === idx ? 'bg-slate-400' : 'bg-slate-800'
            }`}
          />
        ))}
      </div>

      {/* Display only the current image */}
      <img 
        src={images[imageIndex]} 
        alt={`Slide ${imageIndex}`} 
        className='w-full h-[590px] object-cover object-center'
      />
      
      {/* Navigation Buttons */}
      <button 
        className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-transparent flex justify-center items-center hover:bg-slate-950 hover:bg-opacity-50 text-2xl p-2 z-10 h-full w-[10vw] opacity-0 hover:opacity-100 transition-opacity duration-300'
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button 
        className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-transparent flex justify-center items-center hover:bg-slate-950 hover:bg-opacity-50 text-2xl p-2 z-10 h-full w-[10vw] opacity-0 hover:opacity-100 transition-opacity duration-300'
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Slider;
