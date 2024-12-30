import React, { useState } from "react";
import Slider from "react-slick";
import partnerLogo1 from "../assets/images/aliyaLogo.png";
import partnerLogo2 from "../assets/images/scottish.png";
import partnerLogo3 from "../assets/images/parangi.png";
import partnerLogo4 from "../assets/images/malu.png";
import partnerVideo1 from "../assets/vid/aliyaVid.mp4";
import partnerVideo2 from "../assets/vid/scottishVid.mp4";
import partnerVideo3 from "../assets/vid/parangiVid.mp4";
import partnerVideo4 from "../assets/vid/maalu-maalu-resort-spa-thema-web-clip.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Aliya - Sigiriya",
    logo: partnerLogo1,
    video: partnerVideo1,
    description:
      "Partner One is committed to providing exceptional services and has been a leader in the industry for years.",
  },
  {
    id: 2,
    name: "Scottish Planter - Nuwara Eliya",
    logo: partnerLogo2,
    video: partnerVideo2,
    description:
      "Partner Two specializes in innovative solutions and works closely with us to ensure customer satisfaction.",
  },
  {
    id: 3,
    name: "Parangi - Weligama",
    logo: partnerLogo3,
    video: partnerVideo3,
    description:
      "Partner Three has a strong reputation for excellence and collaborates on multiple global projects.",
  },
  {
    id: 4,
    name: "Maalu Maalu - Pasikuda",
    logo: partnerLogo4,
    video: partnerVideo4,
    description:
      "Partner Four focuses on delivering high-quality services with a customer-first approach.",
  },
];

const PartnersAndAffiliations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 3, // Show 3 thumbnails at a time
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    afterChange: (index) => setCurrentIndex(index),
    prevArrow: (
      <button className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 text-red-500 hover:text-red-700">
        <ChevronLeft size={24} />
      </button>
    ),
    nextArrow: (
      <button className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-blue-500 hover:text-blue-700">
        <ChevronRight size={24} />
      </button>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row py-16 bg-[#ac926e] relative overflow-hidden px-8 sm:px-16 md:px-24 lg:px-32">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center p-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#262632] font-cinzel mb-4">
          Partners & Affiliates
        </h2>
        {/* Partner Video */}
        <video
          src={partners[currentIndex].video}
          autoPlay
          loop
          muted
          className="w-full max-h-[300px] sm:max-h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-6 lg:items-start">
        {/* Partner Details */}
        <div className="text-center lg:text-left p-6 w-full">
          <div
            className="flex flex-col items-center gap-8  w-full"
            style={{ minHeight: "100px" }} // Ensures a consistent height for the logo and title
          >
            {/* Logo with fixed height/width */}
            <img
              src={partners[currentIndex].logo}
              alt={partners[currentIndex].name}
              className="h-full sm:h-24 w-48 object-contain " // Fixed dimensions
            />
            {/* Title with fixed height */}
            <h2
              className="text-2xl sm:text-4xl font-bold text-white font-cormorant"
              style={{
                minHeight: "50px",
                lineHeight: "1.2",
              }}
            >
              {partners[currentIndex].name}
            </h2>
          </div>
          {/* Description with fixed height */}
          <p
            className="text-sm sm:text-base text-white"
            style={{ minHeight: "60px", overflow: "hidden" }}
          >
            {partners[currentIndex].description}
          </p>
        </div>

        {/* Slick Carousel */}
        <div className="w-full max-w-md mx-auto">
          <Slider
            {...settings}
            className="sm:w-[80%] lg:w-[100%]" // Ensures proper width for small and large screens
          >
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="flex justify-start px-2" // Controls spacing between thumbnails
              >
                <video
                  src={partner.video}
                  className={`h-20 sm:h-24 w-20 sm:w-24 object-cover border rounded-lg ${
                    index === currentIndex
                      ? "border-[#333333]"
                      : "border-gray-300"
                  } `}
                  muted
                  loop
                  autoPlay
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnersAndAffiliations;
