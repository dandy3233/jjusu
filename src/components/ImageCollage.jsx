import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard"; // The reusable card component

const ImageCollage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images and their URLs
    fetch("http://localhost:8000/api/image-collage/")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching collage images:", error));
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageSrc={`http://localhost:8000${image.image}`} // Image URL
            instagramUrl={image.instagram} // Instagram URL
            tiktokUrl={image.tiktok} // TikTok URL
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCollage;
