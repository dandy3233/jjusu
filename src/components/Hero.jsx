import React, { useState, useEffect } from "react";
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Hero = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})`,
      }}
    >
      <div className="text-center px-6 md:px-12">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          Jigjiga University <br />
          <span className="text-orange-400 text-7xl">STUDENT UNION</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Our union our voice
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
