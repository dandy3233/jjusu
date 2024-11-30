import React from 'react';

const ImageCard = ({ imageSrc }) => {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-96 rounded-lg overflow-hidden shadow-lg group hover:bg-opacity-75">
      {/* Background image */}
      <img src={imageSrc} alt="Card" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" />

      {/* Social Media Icons Overlay */}
      <div className="absolute inset-0 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/jjustudentunion"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full shadow-lg transform transition duration-300 hover:scale-125 hover:text-pink-600"
        >
          <i className="fab fa-instagram fa-2x"></i> {/* Updated to "fab" */}
        </a>

        {/* TikTok Icon */}
        <a
          href="https://www.tiktok.com/@jjustudentunion"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full shadow-lg transform transition duration-300 hover:scale-125 hover:text-black"
        >
          <i className="fab fa-tiktok fa-2x"></i> {/* Updated to "fab" */}
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
