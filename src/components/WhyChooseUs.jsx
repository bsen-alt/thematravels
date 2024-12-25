import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-900">
        Why Choose Us
      </h2>
      <ul className="grid md:grid-cols-3 gap-8">
        {[
          "Luxury and Personalization",
          "Award-winning Services",
          "Global Partnerships",
        ].map((reason, index) => (
          <li
            key={index}
            className="p-4 bg-white shadow-md hover:shadow-lg transition-transform duration-300"
          >
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
