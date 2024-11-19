import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Feature
          icon={<i className="fas fa-user-graduate text-4xl"></i>}
          title="Certified Teachers"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
          bgColor="bg-orange-500"
        />
        <Feature
          icon={<i className="fas fa-chalkboard-teacher text-4xl"></i>}
          title="Special Education"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
          bgColor="bg-gray-900"
        />
        <Feature
          icon={<i className="fas fa-book text-4xl"></i>}
          title="Book & Library"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
          bgColor="bg-orange-500"
        />
        <Feature
          icon={<i className="fas fa-basketball-ball text-4xl"></i>}
          title="Sport Clubs"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
          bgColor="bg-gray-900"
        />
      </div>
    </section>
  );
};

export default Features;
