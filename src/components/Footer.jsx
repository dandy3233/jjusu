import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        
        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Have a Question?</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i> {/* Location Icon */}
              Jigjiga University <br /> 1020 Somali Region <br /> Ethiopia
            </li>
            <li>
              <i className="fas fa-envelope text-orange-500 mr-2"></i> {/* Email Icon */}
              Email:{" "}
              <a
                href="mailto:jjustudentsunion@gmail.com"
                className="text-orange-500 hover:text-orange-400"
              >
                jjustudentsunion@gmail.com
              </a>
            </li>
            <li>
              <i className="fas fa-phone text-orange-500 mr-2"></i> {/* Phone Icon */}
              Call Us:{" "}
              <a href="tel:+1235235598" className="text-orange-500 hover:text-orange-400">
                +1235 2355 98
              </a>
            </li>
          </ul>
        </div>

        {/* Centered Links Section */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li className="flex items-center">
              <i className="fas fa-home text-orange-500 mr-2"></i> {/* Home Icon */}
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-info-circle text-orange-500 mr-2"></i> {/* About Icon */}
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-users text-orange-500 mr-2"></i> {/* Staff Icon */}
              <a href="#staff" className="hover:underline">
                Staff
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-orange-500 mr-2"></i> {/* Contact Icon */}
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Placeholder for Recent Blog Section */}
        <div>
          {/* Add blog content here if needed */}
        </div>

        {/* Subscribe Section with Justify-End */}
        <div className="flex flex-col justify-end">
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none border border-gray-300"
            />
            <button className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 hover:shadow-lg transition duration-200">
              Subscribe
            </button>
          </form>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-5 justify-start">
              {/* Telegram Icon with Link */}
              <a
                href="https://t.me/JJUSUINFOC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-150 text-2xl"
              >
                <i className="fab fa-telegram-plane"></i> {/* Telegram Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-150 text-2xl">
                <i className="fab fa-facebook"></i> {/* Facebook Icon */}
              </a>
              <a href="https://www.instagram.com/jjustudentunion" className="text-gray-400 hover:text-orange-500 transition duration-150 text-2xl">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a href="https://www.tiktok.com/@jjustudentunion" className="text-gray-400 hover:text-orange-500 transition duration-150 text-2xl">
                <i className="fab fa-tiktok"></i> {/* TikTok Icon */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-12">
        ©2024 All rights reserved | Made with ❤️ by STUDENT UNION
      </div>
    </footer>
  );
};

export default Footer;
