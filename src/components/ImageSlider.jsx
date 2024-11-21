// ImageSlider.js
import React, { useState, useEffect } from 'react';
import Firstimage from "../assets/0.png"
import Secondimage from "../assets/1.png"
import Thirdimage from "../assets/2.png"
import Fourthimage from "../assets/3.png"
import Fifthimage from "../assets/4.png"
import Sixthimage from "../assets/5.png"



const ImageSlider = () => {
  const images = [
     Firstimage,
     Secondimage,
     Thirdimage,
     Fourthimage,
     Fifthimage,
     Sixthimage
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds interval

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full  max-w-2xl mx-auto  rounded-[50px] p-[3px]">
      {/* Image Slide */}
      <div className="overflow-hidden p-7">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto transition-all duration-700 ease-in-out border-4  lg:rounded-[50px] rounded-[20px]"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-70"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-12 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-70"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      
    </div>
  );
};

export default ImageSlider;
