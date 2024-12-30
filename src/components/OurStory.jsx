import { motion } from "framer-motion";
import React from "react";
import aboutImg3 from "../assets/images/aboutIMg3.jpg";
import logo from "../assets/images/logo-modified.png";

const OurStory = () => {
  return (
    <div className="py-16 px-8 bg-white mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-start z-10">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-[3rem] sm:leading-[4rem] font-cinzel"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            OUR STORY. <br /> YOUR STORY.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed font-cormorant"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We’re really proud to be a standout in Sri Lankan travel
            experiences. It all started with Maduranga Herath, our founder, who
            had this amazing vision and a deep passion for showcasing the beauty
            and culture of our homeland. Thema Travels has come a long way from
            its humble beginnings.
            <br />
            Now, we’re thriving as part of the ELVORA HOLDINGS Business Group.
            What sets us apart is our commitment to personalized travel. We take
            the time to create custom itineraries that match the unique
            interests and preferences of our clients.
          </motion.p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 relative w-full h-full flex justify-center items-center ">
          {/* Main Image */}
          <img
            src={aboutImg3}
            alt="About Us"
            className="w-full h-auto max-w-full shadow-lg rounded-lg"
          />
          {/* Logo positioned in the top-left corner */}
          <img
            src={logo}
            alt="Logo"
            className="absolute -top-10 md:-left-12 -left-[.5rem] w-32 sm:w-40 md:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
