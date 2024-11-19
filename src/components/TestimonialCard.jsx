import React from 'react';

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex items-center text-left p-6 sm:p-8 md:p-10">
      {/* Image */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-[150px] h-[150px] rounded-full mr-6 sm:w-[180px] sm:h-[180px]"
      />
      
      {/* Text */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold">{testimonial.name}</h3>
        <p className="text-sm sm:text-base text-orange-500">{testimonial.role}</p>
        <p className="italic text-gray-700 mt-2 sm:text-base">"{testimonial.quote}"</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
