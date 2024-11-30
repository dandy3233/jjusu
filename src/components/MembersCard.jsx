import React from "react";

const MembersCard = ({ name, role, description, image, socialLinks }) => {
  return (
    <div className="max-w-sm shadow-none p-6 hover:shadow-none transition duration-300 transform hover:-translate-y-2">
      {/* Profile Image with Hover Effect */}
      <div className="relative flex justify-center mb-4 group">
        <img
          src={image}
          alt={name}
          className="w-80 h-80 object-cover"
          style={{ borderRadius: "8%" }} // No rounded corners
        />
        {/* Social Media Icons on Hover (Visible on all devices) */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="flex space-x-4">
            {socialLinks?.facebook && (
              <a
                href={socialLinks.facebook}
                className="text-white hover:text-blue-500 transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                className="text-white hover:text-blue-400 transition"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                className="text-white hover:text-pink-500 transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="text-white hover:text-gray-400 transition"
                aria-label="LinkedIn"
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
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        {/* Role */}
        <p className="text-sm text-orange-500 mb-2">{role}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default MembersCard;
