import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import teamHeadImg from "../assets/images/teamhead.png";
import teamMember1Img from "../assets/images/team1.png";
import teamMember2Img from "../assets/images/team2.png";
import teamMember3Img from "../assets/images/team3.png";
import teamMember4Img from "../assets/images/team4.png";
import mandalaImg from "../assets/images/mandala1 (1).png";

const OurTeam = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-x-hidden py-32 bg-white px-8 sm:px-16 md:px-32 z-10">
      {/* Mandala Image */}
      <img
        src={mandalaImg}
        alt="Mandala"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[36rem] opacity-15 pointer-events-none z-0"
        style={{ transform: "translateX(50%) translateY(-50%)" }}
      />

      {/* Heading Section */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 font-cinzel"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Team
      </motion.h2>
      <motion.p
        className="mb-12 text-center text-gray-900 text-lg sm:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hello and Ayubowan to Thema Travels!
      </motion.p>

      {/* Team Head Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {/* Team Head Image */}
        <div className="md:w-1/3 w-full items-center z-10 ">
          <img src={teamHeadImg} alt="Team Head" className="w-full" />
        </div>

        {/* Team Head Message */}
        <div className="md:w-2/3 w-full text-gray-800">
          <h3 className="text-3xl text-center md:text-left sm:text-4xl font-cormorant font-bold">
            Yeshi Fernando
          </h3>
          <p className="text-sm uppercase text-gray-500 mb-6 text-center md:text-left">
            Team Head
          </p>
          <p className="text-lg sm:text-xl leading-relaxed italic">
            "Hey there! Welcome to Sri Lanka! We’re super excited to have you
            with us at Thema Travels. Get ready for an amazing adventure filled
            with stunning sights, rich culture, and friendly faces. <br />
            <br />
            Our team is here to make sure you have a fantastic time, customized
            just for you. If you have any questions or need anything at all,
            don’t hesitate to ask. We can’t wait to help you create some
            unforgettable memories here in Sri Lanka!"
          </p>
        </div>
      </motion.div>

      {/* Other Team Members Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          {
            name: "Milinda Kenny",
            position: "Tour Consultant",
            img: teamMember1Img,
          },
          {
            name: "Piyumi Mekala",
            position: "Social Media & Community Manager",
            img: teamMember2Img,
          },
          {
            name: "Praneeth Moremada",
            position: "Tour Consultant",
            img: teamMember3Img,
          },
          {
            name: "Harsha Wijerathne",
            position: "Tour Coordinator",
            img: teamMember4Img,
          },
        ].map((member, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white border border-black/30 group h-full rounded-lg"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {/* Image Section */}
            <div className="h-96 sm:h-48 lg:h-56">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col h-full text-center bg-white group-hover:bg-gray-900 transition-colors duration-300 items-center py-1 px-2">
              <h4 className="text-xl sm:text-2xl font-semibold font-cormorant text-gray-800 group-hover:text-white leading-5">
                {member.name}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-300">
                {member.position}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;
