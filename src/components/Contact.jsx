import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data using EmailJS
    emailjs
      .sendForm(
        "service_9bb1xv8", // Replace with your EmailJS Service ID
        "template_vnyqcqe", // Replace with your EmailJS Template ID
        e.target,           // This is automatically filled by the form data
        "CpRaNmmkEYZBYaSuk"      // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Message Sent Successfully", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("Error in Sending Message", error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );

    // Reset the form data after submitting
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center text-white bg-[url('/src/assets/contact-bg.jpg')]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="absolute bottom-9 text-sm">We’d love to hear from you!</p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center border border-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p>Jigjiga University</p>
            <p>1020 Somali Region</p>
            <p>Ethiopia</p>
          </div>
          <div className="text-center border border-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Contact Number</h3>
            <p>
              <a href="tel:+1235235598" className="text-orange-500 hover:underline">
                +1235 2355 98
              </a>
            </p>
          </div>
          <div className="text-center border border-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Email Address</h3>
            <p>
              <a href="mailto:jjustudentunion@gmail.com" className="text-orange-500 hover:underline">
                jjustudentunion@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center border border-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Website</h3>
            <p>yoursite.com</p>
          </div>
        </div>
      </div>

      {/* Form and Map */}
      <div className="bg-gray-200 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Map */}
          <div className="flex items-center justify-center">
            <iframe
              title="Jigjiga University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.6645235795018!2d42.8253704!3d9.3591686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1633d2dd195ebbb5%3A0x7b32ff13f6be2f48!2sJigjiga%20University!5e0!3m2!1sen!2set!4v1697620943470!5m2!1sen!2set"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
