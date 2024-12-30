import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import luxaryImg from "../assets/images/luxarytour.jpg";
import romanticImg from "../assets/images/romantic.jpg";
import allaroundImg from "../assets/images/allround.jpg";
import bikeImg from "../assets/images/biking.jpg";
import holidayImg from "../assets/images/holiday.jpg";
import natureImg from "../assets/images/nature.jpg";
import wellnessImg from "../assets/images/wellness.jpg";
import cultureImg from "../assets/images/culture.jpg";
import footerCloudsImg from "../assets/images/footerClouds.png";

const packages = [
  {
    image: luxaryImg,
    title: "Luxury Tours",
    description:
      "Experience unparalleled luxury and comfort in our exclusive tours.",
    buttonText: "Explore Luxury",
  },
  {
    image: romanticImg,
    title: "Romantic Getaways",
    description:
      "Create unforgettable memories with your loved one in romantic settings.",
    buttonText: "View Packages",
  },
  {
    image: allaroundImg,
    title: "All-Around Adventures",
    description:
      "Explore diverse destinations for a complete travel experience.",
    buttonText: "Discover Adventures",
  },
  {
    image: bikeImg,
    title: "Biking Tours",
    description: "Pedal through scenic routes and immerse yourself in nature.",
    buttonText: "Start Riding",
  },
  {
    image: holidayImg,
    title: "Holiday Escapes",
    description: "Relax and rejuvenate with our perfect holiday packages.",
    buttonText: "Plan Your Escape",
  },
  {
    image: natureImg,
    title: "Nature Retreats",
    description: "Reconnect with nature in serene and breathtaking locations.",
    buttonText: "View Retreats",
  },
  {
    image: wellnessImg,
    title: "Wellness Journeys",
    description:
      "Find inner peace with our wellness-focused travel experiences.",
    buttonText: "Explore Wellness",
  },
  {
    image: cultureImg,
    title: "Cultural Experiences",
    description:
      "Dive deep into the culture and traditions of our destinations.",
    buttonText: "Learn More",
  },
];

const HeroSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change the current index for the infinite carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    packages[currentIndex],
    packages[(currentIndex + 1) % packages.length],
    packages[(currentIndex + 2) % packages.length],
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={packages[currentIndex].image}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${packages[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Header content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[3rem] sm:text-[4rem] font-normal mb-4 font-cinzel">
          {packages[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-xl font-light max-w-2xl px-4">
          {packages[currentIndex].description}
        </p>
        <button className="mt-6 bg-white text-black py-2 px-6 font-semibold hover:bg-gray-300 transition duration-300 rounded-md">
          {packages[currentIndex].buttonText}
        </button>
      </motion.div>

      {/* Infinite Card Carousel (Only visible on larger screens) */}
      <div className="absolute bottom-6 right-6 md:flex gap-3 z-30 hidden lg:flex">
        {visibleCards.map((pkg, index) => (
          <motion.div
            key={pkg.image}
            className="h-48 w-36 sm:h-36 sm:w-24 shadow-md overflow-hidden rounded-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* See All Tours Button */}
      <div className="absolute bottom-6 left-1/2 md:left-40 transform -translate-x-1/2 z-30 sm:left-1/2 sm:bottom-8">
        <button className="bg-white text-black py-2 px-6 font-semibold hover:bg-gray-300 transition duration-300 rounded-md">
          See All Tour Packages
        </button>
      </div>
    </div>
  );
};

export default HeroSection2;
