import React from "react";
import { useNavigate } from "react-router-dom";

const CustomizeTourBar = () => {
  const navigate = useNavigate();

  const handleCustomizeClick = () => {
    navigate("/customize-tour"); // Replace with your actual route
  };

  return (
    <div
      className="flex items-center justify-between
bg-gradient-to-r from-[#333333] via-[#704F37] to-[#D2B48C]



     text-white py-10 shadow-lg px-24"
    >
      <div className="flex flex-col">
        <h2 className="text-xl md:text-4xl font-semibold">
          Craft Your Dream Adventure!
        </h2>
        <p className="text-sm md:text-base mt-2">
          Personalize every detail to make your tour truly unforgettable.
        </p>
      </div>

      <button
        onClick={handleCustomizeClick}
        className="bg-white text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-100 hover:shadow-lg transition-all duration-300"
      >
        Customize Your Tour
      </button>
    </div>
  );
};

export default CustomizeTourBar;
