import React, { useState, useEffect } from 'react';

// Import the images
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const UniversityInfo = () => {
  // Array of image sources
  const images = [image1, image2, image3];
  
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Stats data
  const stats = [
    { title: "Certified Teachers", value: 18 },
    { title: "Students", value: 401 },
    { title: "Courses", value: 30 },
    { title: "Awards Won", value: 50 },
  ];

  // Function to handle the count up effect
  const useCountUp = (targetValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = targetValue / 100; // Increment by a fraction of the target value
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue); // Stop counting once the target value is reached
          clearInterval(interval);
        } else {
          setCount(Math.floor(start)); // Update the count, floor to avoid decimals
        }
      }, 30); // Update the count every 30ms
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [targetValue]);

    return count;
  };

  return (
    <div className="bg-gray-800 text-white py-12 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section with Animation */}
          <div className="animate-fadeIn">
            <img
              src={images[currentImageIndex]} // Dynamically change the image based on currentImageIndex
              alt="Fox University"
              className="w-[530px] h-[350px] rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Text Section with Animation (Centered) */}
          <div className="animate-fadeIn flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold mb-4 text-orange-500">Jigjiga University</h1>
            <p className="mb-4">
              The one of the public higher institutions that was founded in March 2007, 
              along with the Second-Generation universities in Ethiopia. It is located in 
              the emerging town of Jigjiga, the capital city of Ethiopian Somali regional state, 
              635 kilometers away from Addis Ababa. The University officially started  
              its service with 712 students, 66 faculty, and 99 administrative staff in three faculties in 2007.

              In recent years, the intake capacity has been increasing year by year. 
              Currently, it has a total of 21,554 students studying in 57 various academic 
              programs and 627 post-graduate students pursuing six academic programs. 
              These programs are operating under eight Colleges, three Schools, and an Institute.
            </p>
          </div>
        </div>

        {/* Stats Section (Placed Below the Image Section and Centered) */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fadeIn text-center">
              <h2 className="text-3xl font-bold">
                {useCountUp(stat.value)} {/* Automatically counting the value */}
              </h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityInfo;
