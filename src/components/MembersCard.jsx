import React from "react";

const MembersCard = ({ name, role, description, image, facebook, twitter, instagram, linkedin }) => {
  return (
    <div className="max-w-sm shadow-none p-6 hover:shadow-none transition duration-300 transform hover:-translate-y-2">
      {/* Profile Image with Hover Effect */}
      <div className="relative flex justify-center mb-4 group">
        <img
          src={image}  // Make sure this is the full URL (e.g., "http://localhost:8000/media/staff_images/...")
          alt={name}
          className="w-80 h-80 object-cover"
          style={{ borderRadius: "8%" }}
        />
        {/* Social Media Icons on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="flex space-x-4">
            {facebook && (
              <a
                href={facebook}
                className="text-white hover:text-blue-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className="text-white hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                className="text-white hover:text-pink-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                className="text-white hover:text-gray-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Member Details */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-orange-500 mb-2">{role}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};


export default MembersCard;

