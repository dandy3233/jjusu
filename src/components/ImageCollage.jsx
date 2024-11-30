import React from 'react';
import ImageCard from './ImageCard'; // Correct path for ImageCard component

// Importing local images
import image1 from '../assets/member1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
// import image4 from '../assets/image4.png'; // Add more if needed
import image5 from '../assets/image2.png';
// import image6 from '../assets/image6.png';

const ImageCollage = () => {
  // Array of image sources (now using the imported images)
  const imageSources = [image1, image2, image3, image2, image5, image1, image2, image3];

  return (
    <div className="p-8">
      {/* Grid of ImageCards with small gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {imageSources.map((imageSrc, index) => (
          <ImageCard key={index} imageSrc={imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default ImageCollage;
