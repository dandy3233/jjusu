import React from "react";

const MembersCard = ({ name, role, description, image, socialLinks }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>
      <p className="text-sm text-orange-500 text-center mb-2">{role}</p>
      <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            className="text-blue-500 hover:text-blue-700 transition"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            className="text-blue-400 hover:text-blue-600 transition"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            className="text-pink-600 hover:text-pink-800 transition"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            className="text-gray-800 hover:text-gray-600 transition"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default MembersCard;
