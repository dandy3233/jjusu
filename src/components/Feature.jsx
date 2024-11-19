import React from "react";

const Feature = ({ icon, title, description, bgColor }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${bgColor} text-white transform transition duration-500 ease-in-out hover:scale-105 animate-fadeIn`}
    >
      <div className="flex items-center justify-center h-16 w-16 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Feature;
