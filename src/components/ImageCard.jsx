import React from "react";

const ImageCard = ({ imageSrc, instagramUrl, tiktokUrl }) => {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-96 rounded-lg overflow-hidden shadow-lg group">
      {/* Background image */}
      <img
        src={imageSrc}
        alt="Card"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
      />

      {/* Social Media Icons Overlay */}
      <div className="absolute inset-0 flex flex-row items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
        {/* Instagram Icon */}
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow-lg transform hover:scale-125 hover:text-pink-600"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}

        {/* TikTok Icon */}
        {tiktokUrl && (
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow-lg transform hover:scale-125 hover:text-black"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
