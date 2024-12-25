import { motion } from "framer-motion";
import React from "react";
import awardImg from "../assets/images/awardImg.jpg";

const AwardsAndRecognition = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-900">
        Awards and Recognition
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.div
              key={index}
              className="relative p-4 bg-gray-100 overflow-hidden"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.8 }}
            >
              <img src={awardImg} alt="Award" className="h-32 mx-auto" />
              <p className="text-center mt-4">Award Name</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default AwardsAndRecognition;
