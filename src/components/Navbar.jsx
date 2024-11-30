import React, { useState } from "react";
import logo from "../assets/image.png"; // Adjust the import path
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Top Section */}
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
            <a
              href="mailto:jjustudentsunion@gmail.com"
              className="text-orange-500 hover:underline"
            >
              jjustudentsunion@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <i className="fas fa-phone text-orange-500 mr-2"></i>
            <a
              href="tel:+1235235598"
              className="text-orange-500 hover:underline"
            >
              +1235 2355 98
            </a>
          </p>
        </div>

        {/* Logo Image (Hidden on Mobile) */}
        <div className="mt-4 md:mt-0 hidden md:block">
          <img
            src={logo}
            alt="Student Union Logo"
            className="h-16 w-16 rounded-full border-2 border-orange-500"
          />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl transition-transform transform duration-300`}
            ></i>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-white">
            <a href="#home" className="hover:text-orange-500 flex items-center">
              <i className="fas fa-home mr-2"></i> Home
            </a>
            <a href="#about" className="hover:text-orange-500 flex items-center">
              <i className="fas fa-info-circle mr-2"></i> About
            </a>
            <a href="#staff" className="hover:text-orange-500 flex items-center">
              <i className="fas fa-users mr-2"></i> Staff
            </a>
            <a href="#contact" className="hover:text-orange-500 flex items-center">
              <i className="fas fa-envelope mr-2"></i> Contact
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden bg-gray-800 text-white px-4 py-2 transform"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <ul className="space-y-4">
              <li>
                <a href="#home" className="block hover:text-orange-500">
                  <i className="fas fa-home mr-2"></i> Home
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:text-orange-500">
                  <i className="fas fa-info-circle mr-2"></i> About
                </a>
              </li>
              <li>
                <a href="#staff" className="block hover:text-orange-500">
                  <i className="fas fa-users mr-2"></i> Staff
                </a>
              </li>
              <li>
                <a href="#contact" className="block hover:text-orange-500">
                  <i className="fas fa-envelope mr-2"></i> Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
