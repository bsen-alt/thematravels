import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import MissionAndVision from "../components/MissionAndVision.jsx";
import OurStory from "../components/OurStory.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import OurTeam from "../components/OurTeam.jsx";
import AboutHeader from "../components/AboutHeader.jsx";
import PartnersAndAffiliations from "../components/PartnersAndAffiliations.jsx";
import AwardsAndRecognition from "../components/AwardsAndRecognition.jsx";
import FAQs from "../components/FAQs.jsx";

// Sample Images (replace these with actual imports)
// import teamMemberImg from "../assets/images/teammember.jpg";
// import partnerImg from "../assets/images/partner-placeholder.jpg";
// import awardImg from "../assets/images/award-placeholder.jpg";

// Fonts (apply globally or per section as needed)
const AboutPage = () => {
  return (
    <section className="about-us text-gray-800 ">
      <AboutHeader />
      {/* Our Story */}
      <OurStory />

      {/* Mission and Vision */}
      <MissionAndVision />

      {/* Why Choose Us */}
      {/* <WhyChooseUs /> */}

      {/* Our Team */}
      <OurTeam />

      {/* Partners and Affiliations */}
      <PartnersAndAffiliations />

      {/* Awards and Recognition */}
      {/* <AwardsAndRecognition /> */}

      {/* FAQs */}
      <FAQs />
    </section>
  );
};

export default AboutPage;
