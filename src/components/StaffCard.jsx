import React from "react";
import MembersCard from "./MembersCard"; // Updated import
import image3 from "../assets/dandy.png"; // Import an example local image
import image4 from "../assets/image3.png";
import image1 from "../assets/pr.png";
import image2 from "../assets/vpr.png";

const staffMembers = [
  {
    name: "Abdirsak Mohammed",
    role: "PRESIDENT",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image1,
    socialLinks: {
      facebook: "https://facebook.com/mitch",
      twitter: "https://twitter.com/mitch",
      instagram: "https://instagram.com/mitch",
      linkedin: "https://linkedin.com/in/mitch",
    },
  },
  {
    name: "Kumsa Fuad",
    role: "VICE PRESIDENT",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image2,
    socialLinks: {
      facebook: "https://facebook.com/stella",
      twitter: "https://twitter.com/stella",
      instagram: "https://instagram.com/stella",
      linkedin: "https://linkedin.com/in/stella",
    },
  },
  
  {
    name: "Farhan Mohammed",
    role: "GENERAL SECRETARY",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image4,
    socialLinks: {
      facebook: "https://facebook.com/monshe",
      twitter: "https://twitter.com/monshe",
      instagram: "https://instagram.com/monshe",
      linkedin: "https://linkedin.com/in/monshe",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },


  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  {
    name: "Dandi Takilu ",
    role: "GENERAL SERVICE HEAD",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },

  
  
];

const StaffCard = () => {
  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Meet Our Staff <span className="text-orange-400">STUDENT UNION</span>
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 animate-marquee">
          {staffMembers.concat(staffMembers).map((staff, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <MembersCard {...staff} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
