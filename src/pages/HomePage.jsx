import React, { useState, useEffect } from "react";
import HeroSection2 from "../components/HeroSection2";
import FeaturedPackages from "../components/FeaturedPackages";
import WhyUs from "../components/WhyUs";
import ScrollLine from "../components/ScrollLine";
import CustomizeTourBar from "../components/CustomizeTourBar";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <ScrollLine /> */}
      <div
        className={`section ${activeSection === 0 ? "stacked" : ""}`}
        id="hero-section"
      >
        <HeroSection2 />
      </div>
      <div
        className={`section ${activeSection === 1 ? "stacked" : ""}`}
        id="featured-packages"
      >
        <FeaturedPackages />
      </div>
      <CustomizeTourBar />
      <div
        className={`section ${activeSection === 2 ? "stacked" : ""}`}
        id="why-us"
      >
        <WhyUs />
      </div>
    </div>
  );
};

export default HomePage;
