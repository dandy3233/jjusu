import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './data'; // assuming you updated the testimonials data

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-5 max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        <span className="text-orange-400 text-3xl sm:text-4xl">Student Says</span> About Us
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
        Hear directly from our students about their experiences with our program.
      </p>
      <div className="relative">
        {/* Testimonial Card */}
        <TestimonialCard testimonial={testimonials[currentIndex]} />
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition md:p-3"
        >
          {/* Left Arrow Icon */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition md:p-3"
        >
          {/* Right Arrow Icon */}
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                idx === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
