import React, { useEffect, useRef } from "react";
import MembersCard from "./MembersCard"; // Import MembersCard
import image3 from "../assets/dandy.png";
import image4 from "../assets/sec.png";
import image5 from "../assets/secr.png";
import image1 from "../assets/pr.png";
import image2 from "../assets/vpr.png";

const staffMembers = [
  {
    name: "Nesra Ahmed ",
    role: "PRESIDENT",
    description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    image: image3,
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
    image: image5,
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
    image: image1,
    socialLinks: {
      facebook: "https://facebook.com/bianca",
      twitter: "https://twitter.com/bianca",
      instagram: "https://instagram.com/bianca",
      linkedin: "https://linkedin.com/in/bianca",
    },
  },
  {
    name: "Aminata Diouf",
    role: "TREASURER",
    description: "I am an organized person, passionate about finance and ensuring the smooth functioning of the union.",
    image: image4,
    socialLinks: {
      facebook: "https://facebook.com/aminata",
      twitter: "https://twitter.com/aminata",
      instagram: "https://instagram.com/aminata",
      linkedin: "https://linkedin.com/in/aminata",
    },
  },
  {
    name: "Muna Ali",
    role: "CULTURAL OFFICER",
    description: "I love working with the student body to foster a sense of community through culture and events.",
    image: image2,
    socialLinks: {
      facebook: "https://facebook.com/muna",
      twitter: "https://twitter.com/muna",
      instagram: "https://instagram.com/muna",
      linkedin: "https://linkedin.com/in/muna",
    },
  },
  {
    name: "Rashid Sadiq",
    role: "SPORTS OFFICER",
    description: "I'm enthusiastic about sports and helping our students participate and compete in various events.",
    image: image5,
    socialLinks: {
      facebook: "https://facebook.com/rashid",
      twitter: "https://twitter.com/rashid",
      instagram: "https://instagram.com/rashid",
      linkedin: "https://linkedin.com/in/rashid",
    },
  },
  {
    name: "Sarah Ali",
    role: "WELFARE OFFICER",
    description: "I work to ensure the wellbeing and comfort of all students, providing necessary resources and support.",
    image: image1,
    socialLinks: {
      facebook: "https://facebook.com/sarah",
      twitter: "https://twitter.com/sarah",
      instagram: "https://instagram.com/sarah",
      linkedin: "https://linkedin.com/in/sarah",
    },
  },
  {
    name: "Samiha Noor",
    role: "SECRETARY GENERAL",
    description: "I am passionate about creating a voice for students and facilitating communication between the union and the student body.",
    image: image4,
    socialLinks: {
      facebook: "https://facebook.com/samiha",
      twitter: "https://twitter.com/samiha",
      instagram: "https://instagram.com/samiha",
      linkedin: "https://linkedin.com/in/samiha",
    },
  },
  {
    name: "David Mohamud",
    role: "COMMUNITY OUTREACH OFFICER",
    description: "I work on fostering connections with local communities and ensuring our students are involved in impactful causes.",
    image: image3,
    socialLinks: {
      facebook: "https://facebook.com/david",
      twitter: "https://twitter.com/david",
      instagram: "https://instagram.com/dandytakilu",
      linkedin: "https://linkedin.com/in/david",
    },
  },
];

const StaffCard = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Set an interval to auto-scroll every 3 seconds
    const intervalId = setInterval(() => {
      scrollRight();
    }, 3000); // Change 3000ms to whatever interval you prefer

    // Clear interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Meet Our Staff <span className="text-orange-400">STUDENT UNION</span>
      </h2>

      {/* Staff Cards */}
      <div
        className="relative"
      >
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        >
          {staffMembers.concat(staffMembers).map((staff, index) => (
            <div key={index} className="flex-shrink-0 w-90">
              <MembersCard {...staff} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
