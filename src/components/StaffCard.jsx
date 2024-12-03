import React, { useEffect, useState } from "react";
import MembersCard from "./MembersCard";

const StaffCard = () => {
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/staff/")  // Ensure this URL matches your API
      .then((response) => response.json())
      .then((data) => setStaffMembers(data))
      .catch((error) => console.error("Error fetching staff data:", error));
  }, []);

  return (
    <div className="py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Meet Our Staff <span className="text-orange-400">STUDENT UNION</span>
      </h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4">
          {staffMembers.map((staff, index) => (
            <div key={index} className="flex-shrink-0 w-90">
              <MembersCard {...staff} /> {/* Passing all staff properties as props */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
