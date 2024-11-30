import React from "react";
import logo from "../assets/image.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Nav = () => {
  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            JJU <br />
            <span className="text-orange-500">STUDENT UNION</span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600">
          <p className="flex items-center">
            <i className="fas fa-envelope text-orange-500 mr-2"></i>
            <a href="mailto:jjustudentsunion@gmail.com" className="text-orange-500 hover:underline">
              jjustudentsunion@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <i className="fas fa-phone text-orange-500 mr-2"></i>
            <a href="tel:+1235235598" className="text-orange-500 hover:underline">
              +1235 2355 98
            </a>
          </p>
        </div>

        {/* Logo Image */}
        <div className="mt-4 md:mt-0">
          <img
            src={logo}
            alt="Student Union Logo"
            className="h-16 w-16 rounded-full border-2 border-orange-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
