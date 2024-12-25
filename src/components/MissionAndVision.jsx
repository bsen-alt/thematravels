import React from "react";
import { motion } from "framer-motion";

const MissionAndVision = () => {
  return (
    <div className="py-16 px-8 sm:px-16 md:px-32 bg-[#333333]">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Section */}
        <motion.div
          className="md:w-4/12 flex items-center mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl flex md:flex-col  gap-1 sm:text-4xl md:text-[4rem] font-normal text-right md:mb-6 md:leading-[2.5rem] sm:leading-[4rem] text-white ">
            <span className="font-sans">OUR</span> <br />
            <span className="font-cinzel">MISSION</span>
          </h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-8/12 bg-gray-100 p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base sm:text-lg md:text-md italic text-gray-800 leading-relaxed font-thin">
            " Our mission at Ceyloni Tours is to provide personalized,
            immersive, and sustainable travel experiences across Sri Lanka. We
            are committed to showcasing the island’s natural wonders, cultural
            richness, and vibrant wildlife, while delivering unparalleled
            service through our expert guides and dedicated team. By crafting
            tailor-made tours that cater to the unique preferences of
            individuals, families, and groups, we aim to create memorable
            journeys that inspire a deep connection with Sri Lanka, promoting
            responsible tourism and leaving a positive impact on both travelers
            and local communities."
          </p>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row-reverse items-start gap-8 mt-8">
        {/* Left Section */}
        <motion.div
          className="md:w-5/12 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl flex md:flex-col gap-1 sm:text-4xl md:text-[4rem] font-normal md:mb-6 md:leading-[2.5rem] sm:leading-[4rem] text-white">
            <span className="font-sans">OUR</span> <br />
            <span className="font-cinzel">VISION</span>
          </h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-7/12 bg-[#E7D4BF] p-8 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base sm:text-lg md:text-md italic text-gray-800 leading-relaxed font-thin">
            "At Ceyloni Tours, our vision is to be the premier travel partner
            for explorers seeking authentic and transformative experiences in
            Sri Lanka. We aim to connect travelers with the island’s rich
            heritage, stunning landscapes, and vibrant wildlife, fostering a
            deeper appreciation of its unique beauty. Through exceptional
            service, sustainable tourism practices, and personalized journeys,
            we aspire to create unforgettable moments that resonate with every
            visitor, ensuring Sri Lanka becomes a cherished destination for
            all."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionAndVision;
