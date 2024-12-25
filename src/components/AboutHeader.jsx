import { motion } from "framer-motion";
import aboutImage from "../assets/images/aboutImg.jpg"; // Replace with your image path

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <motion.div
        className="header-section relative"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header Image */}
        <div className="header-image relative w-full h-[32rem] sm:h-[40rem] lg:h-[48rem]">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>

        {/* Title */}
        <motion.h1
          className="title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl sm:text-5xl lg:text-6xl font-semibold text-white font-cinzel z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          About Us
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default About;
