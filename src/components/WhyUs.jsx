import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { DollarSign, MapPin, UserCheck, Leaf } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import luxaryImg from "../assets/images/luxaryCard.jpg";
import romanticImg from "../assets/images/romanticCard.jpg";
import themaImg from "../assets/images/themaCard.jpg"; // Replace with actual image
import beachImg from "../assets/images/beachCard.jpg"; // Replace with actual image

const reasons = [
  {
    title: "Prices without Intermediaries",
    description:
      "Enjoy competitive pricing as we cut out the middleman, offering you the best value for your trips.",
    icon: <DollarSign className="text-4xl text-primary" />,
  },
  {
    title: "Local Knowledge",
    description:
      "Benefit from the expertise of local guides and insiders who know the destination intimately.",
    icon: <MapPin className="text-4xl text-primary" />,
  },
  {
    title: "Personalized Tours",
    description:
      "Every tour is tailored to meet your preferences, ensuring a unique and unforgettable experience.",
    icon: <UserCheck className="text-4xl text-primary" />,
  },
  {
    title: "Responsible Tourism",
    description:
      "We prioritize sustainable practices to protect and preserve the environment and local cultures.",
    icon: <Leaf className="text-4xl text-primary" />,
  },
];

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const navigate = useNavigate();

  // Slick carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-[#f3eeed] py-24 px-6 md:px-12 lg:px-24 h-full ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 h-full  items-center">
        {/* Right Content (Carousel) */}
        <div className=" order-last lg:order-first items-center">
          <Slider {...sliderSettings}>
            <div className="overflow-hidden shadow-xl">
              <motion.img
                className="w-full h-96 object-cover"
                src={luxaryImg}
                alt="Feature 1"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="overflow-hidden shadow-lg">
              <motion.img
                className="w-full h-96 object-cover"
                src={romanticImg}
                alt="Feature 2"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="overflow-hidden shadow-lg">
              <motion.img
                className="w-full h-96 object-cover"
                src={themaImg}
                alt="Feature 3"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="overflow-hidden shadow-lg">
              <motion.img
                className="w-full h-96 object-cover"
                src={beachImg}
                alt="Feature 4"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </Slider>
        </div>

        {/* Left Content (Text and Reasons) */}
        <div className="order-first lg:order-last px-4">
          <h2 className="text-5xl font-cinzel font-bold text-gray-800 mb-6 text-center ">
            Why Choose Us
          </h2>
          <p className="text-sm text-gray-600 mb-8 text-justify">
            We offer unique and personalized travel experiences, ensuring every
            journey is unforgettable and meaningful. Discover why travelers
            trust us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="text-primary">{reason.icon}</div>
                <div className="ml-4">
                  <h3 className="text-3xl font-bold font-cormorant text-gray-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-justify">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
