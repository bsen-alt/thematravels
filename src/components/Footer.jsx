import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logoImg from "../assets/images/logo-modified.png";
import textLogo from "../assets/images/themalogo_white.png";
import mandalaImg1 from "../assets/images/mandala1_white.png";
import footerImg3 from "../assets/images/footerImg31.png";

const Footer = () => {
  return (
    <footer>
      {/* Image Container with Gradient Overlay */}
      <div className="relative w-full h-[50vh] ">
        {/* Background Image */}
        <img
          src={footerImg3}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/20 to-transparent z-10"></div>
      </div>

      {/* Footer Content */}
      <div className="relative bg-[#333333] text-gray-300 py-4 text-[1rem] overflow-hidden px-5">
        {/* Background Image */}
        <img
          src={mandalaImg1}
          alt=""
          className="absolute right-0 transform translate-x-1/2 w-96 opacity-10 z-0 pointer-events-none"
        />

        {/* First Row: Logo and Social Media Icons */}
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-16 z-40 relative">
          <div className="flex  sm:flex-row gap-2 sm:gap-4 items-center mb-4 sm:mb-0">
            {/* <img src={logoImg} alt="" className="h-12" />
            <img src={textLogo} alt="" className="h-24 py-1 pt-2" /> */}
            <h1 className="font-cinzel text-3xl font-normal">Lakpath Yatra</h1>
          </div>
          <div className="flex gap-4 sm:gap-8 justify-center sm:justify-end w-full sm:w-auto">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="h-6 w-6 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="h-6 w-6 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <Youtube className="h-6 w-6 hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 mx-16 border-t border-gray-300 z-20 relative"></div>

        {/* Second Row: Menu Links */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-16 z-30 relative">
          {/* Content sections */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Lakpath Yatra
            </h4>
            <p className="space-y-2 pr-6 text-[.8rem]">
              "At Lakpath Yatra, we bring your travel dreams to life. Whether
              you're seeking luxurious retreats with world-class amenities,
              romantic escapes to celebrate your love, or thrilling adventures
              to satisfy your wanderlust, we’ve got you covered."
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Tours</h4>
            <ul className="space-y-1">
              {[
                "Luxury",
                "Romantic",
                "All-Around Adventures",
                "Biking",
                "Holiday Escapes",
              ].map((tour) => (
                <li key={tour}>
                  <a
                    href={`/tours/${tour.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors duration-300 text-[.9rem] md:text-[.8rem]"
                  >
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">About</h4>
            <ul className="space-y-1">
              {["Who We Are", "FAQ", "Partners", "Awards"].map((about) => (
                <li key={about}>
                  <a
                    href={`/about/${about.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors duration-300 text-[.9rem] md:text-"
                  >
                    {about}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Experiences
            </h4>
            <ul className="space-y-1">
              {["Beach", "Adventure", "Romantic", "Wildlife"].map(
                (experience) => (
                  <li key={experience}>
                    <a
                      href={`/experiences/${experience.toLowerCase()}`}
                      className="hover:text-white transition-colors duration-300 text-[.9rem] md:text-"
                    >
                      {experience}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 mx-16 border-t border-gray-300"></div>

        {/* Copyright Bar */}
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-16 text-[.8rem] z-40 relative">
          <div className="flex flex-col md:flex-row gap-3 mb-4 sm:mb-0 text-center">
            <p>&copy; 2024 Lakpath Yatra. All rights reserved. </p>
            <p className="text-green-300">
              Designed and Developed by Naviron Dynamics Pvt. Ltd
            </p>
          </div>

          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors duration-300 text-[.8rem] mb-5 md:mb-0"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
