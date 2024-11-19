import React from "react";
import logo from "../assets/image.png"; // Adjust the import path to the correct folder
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Nav = () => {
  return (
    <header className="bg-white shadow-lg">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Logo and Name */}
        <div className="text-center md:text-left mx-1.5">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            JJU <br className="md:hidden" />
            <span className="text-orange-500 block md:inline text-right md:text-left">
              STUDENT UNION
            </span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600 text-center md:text-left">
          <p className="flex items-center">
            <i className="fas fa-envelope text-orange-500 mr-2"></i> {/* Email Icon */}
            <a
              href="mailto:jjustudentunion@gmail.com"
              className="text-orange-500 hover:underline"
            >
              jjustudentunion@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <i className="fas fa-phone text-orange-500 mr-2"></i> {/* Phone Icon */}
            <a
              href="tel:+1235235598"
              className="text-orange-500 hover:underline"
            >
              +1235 2355 98
            </a>
          </p>
        </div>

        {/* Logo Image */}
        <div className="flex justify-center">
          <img
            src={logo} // Use the imported logo
            alt="Student Union Logo"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-orange-500" // Increased size for mobile and medium screens
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
