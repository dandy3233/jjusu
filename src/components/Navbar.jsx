import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white items-center">
            <li className="flex items-center">
              <i className="fas fa-home mr-2"></i> {/* Home Icon */}
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-info-circle mr-2"></i> {/* About Icon */}
              <a href="#about" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-users mr-2"></i> {/* Staff Icon */}
              <a href="#staff" className="hover:text-orange-500">
                Staff
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2"></i> {/* Contact Icon */}
              <a href="#contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block rounded-md px-3 py-1 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white px-4 py-2">
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fas fa-home mr-2"></i> {/* Home Icon */}
                <a href="#home" className="block hover:text-orange-500">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-info-circle mr-2"></i> {/* About Icon */}
                <a href="#about" className="block hover:text-orange-500">
                  About
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-users mr-2"></i> {/* Staff Icon */}
                <a href="#staff" className="block hover:text-orange-500">
                  Staff
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i> {/* Contact Icon */}
                <a href="#contact" className="block hover:text-orange-500">
                  Contact
                </a>
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-md px-3 py-1 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
