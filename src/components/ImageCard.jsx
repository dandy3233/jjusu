// src/components/ImageCard.jsx
import React from 'react';

const ImageCard = ({ imageSrc }) => {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Background image */}
      <img src={imageSrc} alt="Card" className="w-full h-full object-cover" />

      {/* Instagram icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-2 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-10 h-10 text-pink-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.6 0 4 .01 5.4.08 1.4.07 2.3.29 2.8.6.6.3 1 .7 1.3 1.3.3.5.5 1.4.6 2.8.07 1.4.08 1.8.08 5.4s-.01 4-.08 5.4c-.07 1.4-.29 2.3-.6 2.8-.3.6-.7 1-1.3 1.3-.5.3-1.4.5-2.8.6-1.4.07-1.8.08-5.4.08s-4-.01-5.4-.08c-1.4-.07-2.3-.29-2.8-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.4-.6-2.8C2.21 16 2.2 15.6 2.2 12s.01-4 .08-5.4c.07-1.4.29-2.3.6-2.8.3-.6.7-1 1.3-1.3.5-.3 1.4-.5 2.8-.6C8 2.21 8.4 2.2 12 2.2zm0-2.2C8.3 0 7.9.01 6.5.08 5.1.15 4 .35 3 1 2.1 1.5 1.5 2.1 1 3 .35 4 .15 5.1.08 6.5.01 7.9 0 8.3 0 12c0 3.7.01 4.1.08 5.5.07 1.4.27 2.5.92 3.5.5.9 1.1 1.4 2 1.9.9.5 2 .8 3.5.9C7.9 23.99 8.3 24 12 24c3.7 0 4.1-.01 5.5-.08 1.4-.07 2.5-.27 3.5-.92.9-.5 1.4-1.1 1.9-2 .5-.9.8-2 .9-3.5.07-1.4.08-1.8.08-5.5s-.01-4.1-.08-5.5c-.07-1.4-.27-2.5-.92-3.5-.5-.9-1.1-1.4-2-1.9-.9-.5-2-.8-3.5-.9C16.1.01 15.7 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.4c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
