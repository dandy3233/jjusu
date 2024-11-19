import React from "react";
import Nav from "./components/Nav"; // Secondary navigation bar
import Navbar from "./components/Navbar"; // Main navigation bar
import Hero from "./components/Hero"; // Hero section
import ImageCollage from "./components/ImageCollage"; // Image gallery
import Features from "./components/Features"; // Features section
import UniversityInfo from "./components/UniversityInfo"; // About/University info section
import StaffCard from "./components/StaffCard"; // Staff profiles
import TestimonialCarousel from "./components/TestimonialCarousel"; // Testimonials carousel
import Footer from "./components/Footer"; // Footer
import Contact from "./components/Contact"; // Contact section

const App = () => {
  return (
    <div>
      {/* Static components always visible */}
      <Nav /> {/* Secondary navigation */}
      <Navbar /> {/* Main navigation */}
      <div id="home">
        <Hero /> {/* Hero section */}
      </div>
      <div id="features">
        <Features /> {/* Features */}
      </div>
      <div id="about">
        <UniversityInfo /> {/* About section */}
      </div>
      <div id="staff">
        <StaffCard /> {/* Staff profiles */}
      </div>
      <div id="testimonials">
        <TestimonialCarousel /> {/* Testimonials */}
      </div>
      <div id="gallery">
        <ImageCollage /> {/* Image gallery */}
      </div>
      <div id="contact">
        <Contact /> {/* Contact section */}
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
};

export default App;
