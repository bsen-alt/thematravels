import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo-modified.png";
import textLogo from "../assets/images/themalogo.png";
import textLogoWhite from "../assets/images/themalogo_white.png";
import { ChevronDown, AlignJustify, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TranslateButton from "./TranslateButton";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [showTours, setShowTours] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to hide the submenus
  const hideSubMenus = () => {
    setShowTours(false);
    setShowAbout(false);
    setShowExperience(false);
  };

  // Function to handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toursColumns = [
    {
      title: <Link to="/rooms/suites">Luxury</Link>,
      content: [
        <Link to="/rooms/suites/standard">4-Day Luxury</Link>,
        <Link to="/rooms/suites/deluxe">7-Day Luxury</Link>,
      ],
    },
    {
      title: <Link to="/rooms/villas">Romantic </Link>,
      content: [
        <Link to="/rooms/villas/one-bedroom">8-Day Honeymoon</Link>,
        <Link to="/rooms/villas/two-bedroom">A Quick Honeymoon </Link>,
      ],
    },
    {
      title: <Link to="/rooms/family">Thema Special </Link>,
      content: [
        <Link to="/rooms/family/standard">2-Week All Around Sri Lanka</Link>,
      ],
    },
    {
      title: <Link to="/rooms/accessible">Beach and Chill </Link>,
      content: [
        <Link to="/rooms/accessible/standard">3-Day Standard Package</Link>,
        <Link to="/rooms/accessible/deluxe">5-Day Luxury Package</Link>,
      ],
    },
    {
      title: <Link to="/rooms/amenities">Hike, Bike, and Kayak</Link>,
      content: [
        <Link to="/rooms/amenities/wi-fi">2-Day Adventure</Link>,
        <Link to="/rooms/amenities/air-conditioning">4-Day Adventure</Link>,
      ],
    },
    {
      title: <Link to="/rooms/promo">Holiday and vacation</Link>,
      content: [
        <Link to="/rooms/promo/seasonal">5-Day Holiday Package</Link>,
        <Link to="/rooms/promo/early-booking">7-Day Vacation Package</Link>,
      ],
    },
    {
      title: <Link to="/rooms/promo">Feel the Nature </Link>,
      content: [
        <Link to="/rooms/promo/seasonal">3-Day Nature Escape</Link>,
        <Link to="/rooms/promo/early-booking">5-Day Wilderness Adventure</Link>,
      ],
    },
    {
      title: <Link to="/rooms/promo">Ayurveda and Wellness</Link>,
      content: [
        <Link to="/rooms/promo/seasonal">3-Day Wellness Retreat</Link>,
        <Link to="/rooms/promo/early-booking">
          7-Day Complete Wellness Program
        </Link>,
      ],
    },
    {
      title: <Link to="/rooms/promo">Wildlife and Safari</Link>,
      content: [
        <Link to="/rooms/promo/seasonal">2-Day Safari Adventure</Link>,
        <Link to="/rooms/promo/early-booking">5-Day Wildlife Exploration</Link>,
      ],
    },
    {
      title: <Link to="/rooms/promo">Culture and History</Link>,
      content: [
        <Link to="/rooms/promo/seasonal">3-Day Cultural Tour</Link>,
        <Link to="/rooms/promo/early-booking">7-Day Heritage Journey</Link>,
      ],
    },
  ];

  const aboutColumns = [
    {
      title: <Link to="/dining/restaurants">Who We Are</Link>,
      content: [
        <Link to="/dining/restaurants/indian">Mission and Vision</Link>,
        <Link to="/dining/restaurants/continental">Our Values</Link>,
        <Link to="/dining/restaurants/chinese">What We Do</Link>,
      ],
    },
    {
      title: <Link to="/dining/cafes">Our Story</Link>,
      content: [
        <Link to="/dining/cafes/coffees">How It Started</Link>,
        <Link to="/dining/cafes/healthy">Our Growth Journey</Link>,
        <Link to="/dining/cafes/snacks">Milestones Achieved</Link>,
      ],
    },
    {
      title: <Link to="/dining/bars">Why Choose Us</Link>,
      content: [
        <Link to="/dining/bars/cocktails">Unique Experiences</Link>,
        <Link to="/dining/bars/whisky">Customer-Centric Approach</Link>,
        <Link to="/dining/bars/wine">Expert Travel Guides</Link>,
      ],
    },
    {
      title: <Link to="/dining/buffet">Our Team</Link>,
      content: [
        <Link to="/dining/buffet/asian">Meet the Team</Link>,
        <Link to="/dining/buffet/european">Our Expertise</Link>,
      ],
    },
    {
      title: <Link to="/dining/room-service">FAQs</Link>,
      content: [
        <Link to="/dining/room-service/breakfast">Booking Information</Link>,
        <Link to="/dining/room-service/dinner">Tour Preparation</Link>,
        <Link to="/dining/room-service/snacks">Cancellation Policy</Link>,
      ],
    },
    {
      title: <Link to="/dining/desserts">Partners and Affiliations</Link>,
      content: [
        <Link to="/dining/desserts/cakes">Our Trusted Partners</Link>,
        <Link to="/dining/desserts/ice-cream">Collaborations</Link>,
      ],
    },
    {
      title: <Link to="/dining/vegetarian">Awards and Recognition</Link>,
      content: [
        <Link to="/dining/vegetarian/starters">Our Achievements</Link>,
        <Link to="/dining/vegetarian/mains">Certifications</Link>,
      ],
    },
  ];

  const experienceColumns = [
    {
      title: <Link to="/experience/spa">Beach Escapes</Link>,
      content: [
        <Link to="/experience/spa/massage">Relax on Pristine Beaches</Link>,
        <Link to="/experience/spa/relaxation">Sunset Yoga Sessions</Link>,
        <Link to="/experience/spa/sauna">Snorkeling Adventures</Link>,
      ],
    },
    {
      title: <Link to="/experience/adventure">Adventure Thrills</Link>,
      content: [
        <Link to="/experience/adventure/surfing">Hiking Trails</Link>,
        <Link to="/experience/adventure/hiking">Biking Expeditions</Link>,
        <Link to="/experience/adventure/scuba-diving">Kayaking Tours</Link>,
      ],
    },
    {
      title: <Link to="/experience/fitness">Romantic Getaways</Link>,
      content: [
        <Link to="/experience/fitness/gym">Honeymoon Packages</Link>,
        <Link to="/experience/fitness/yoga">Private Beach Dinners</Link>,
        <Link to="/experience/fitness/personal-training">Luxury Resorts</Link>,
      ],
    },
    {
      title: <Link to="/experience/cooking">Cultural Journeys</Link>,
      content: [
        <Link to="/experience/cooking/italian">Historical Sites</Link>,
        <Link to="/experience/cooking/asian">
          Authentic Sri Lankan Traditions
        </Link>,
        <Link to="/experience/cooking/local">Local Festivals</Link>,
      ],
    },
    {
      title: <Link to="/experience/wellness">Wildlife Safaris</Link>,
      content: [
        <Link to="/experience/wellness/meditation">
          National Park Excursions
        </Link>,
        <Link to="/experience/wellness/nutrition">Bird Watching</Link>,
        <Link to="/experience/wellness/mental-health">
          Big Five Encounters
        </Link>,
      ],
    },
    {
      title: <Link to="/experience/arts">Ayurveda and Wellness</Link>,
      content: [
        <Link to="/experience/arts/photography">
          Traditional Ayurveda Treatments
        </Link>,
        <Link to="/experience/arts/ceramics">Relaxing Spa Retreats</Link>,
        <Link to="/experience/arts/crafting">Holistic Wellness Programs</Link>,
      ],
    },
    {
      title: <Link to="/experience/entertainment">Nature Immersion</Link>,
      content: [
        <Link to="/experience/entertainment/live-music">Eco-Tours</Link>,
        <Link to="/experience/entertainment/comedy">Rainforest Hikes</Link>,
        <Link to="/experience/entertainment/cinema">Lakeside Retreats</Link>,
      ],
    },
  ];

  const getNavbarClasses = () => {
    const isCategoryPage = location.pathname.startsWith("/category/");
    const isTourDetailPage = location.pathname.startsWith("/tour/");
    const isToursPage = location.pathname === "/tours";
    const isAboutPage = location.pathname === "/about";
    const isCustomizeTourPage = location.pathname === "/customize-tour";
    const isHomePage = location.pathname === "/";

    if (isScrolled) {
      if (isCategoryPage) {
        return " h-[4rem] bg-[#333333] text-white shadow-md "; // Dark background for category pages
      }
      if (isToursPage) {
        return " h-[4rem] md:bg-[#333333] md:text-white shadow-md "; // Dark background for Tours
      }
      if (isAboutPage) {
        return " h-[4rem] bg-white shadow-md "; // Dark background for Tours
      }
      if (isHomePage) {
        return " h-[4rem] bg-white shadow-md "; // Dark background for Tours
      }
      if (isTourDetailPage) {
        return " h-[4rem] bg-white shadow-md "; // Dark background for Tours
      }
      if (isCustomizeTourPage) {
        return " h-[4rem] bg-white shadow-md text-[#333333] "; // Dark background for Tours
      }
      return " h-[4rem] bg-white shadow-md text-white "; // Default background
    }

    // if (!isScrolled) {
    //   return "h-[6rem] py-12 text-white"; // Dark background for Tours
    // }

    if (isCategoryPage) {
      return " h-[6rem] bg-[#333333] text-white "; // Dark background for category pages
    }

    if (isToursPage) {
      return " h-[6rem] bg-[#333333] text-white "; // Dark background for Tours
    }
    if (isTourDetailPage) {
      return " h-[6rem] bg-[#333333] text-white "; // Dark background for Tours
    }

    return " h-[6rem] bg-transparent text-white "; // Default background
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 ">
      {/* Lower Section */}
      <div
        className={`  w-full py-2 flex justify-around  duration-300 md:px-32  ${getNavbarClasses()}`}
      >
        <div className="flex items-center justify-between w-full max-w-[1280px] px-6 font-semibold font-poppins text-[.9rem]">
          {/* Logo Section */}
          <Link to="/" className="flex gap-5 items-center">
            {isScrolled ? (
              <img src={textLogo} alt="" className="h-16 py-1 pt-2" />
            ) : (
              <img src={textLogoWhite} alt="" className="h-16 py-1 pt-2" />
            )}
          </Link>

          {/* DEsktop Navigation Links */}
          <div className="hidden md:flex gap-6 text-[.8rem]">
            {/* HOME Section */}
            <Link
              to="/"
              onClick={hideSubMenus}
              className={
                isScrolled
                  ? "relative group flex gap-1 items-center hover:bg-[#333333] hover:text-white w-fit px-4 hover:py-1"
                  : "relative group flex gap-1 items-center  hover:text-white w-fit px-4 hover:py-1"
              }
            >
              <p>HOME</p>
            </Link>

            {/* TOURS Section */}
            <Link
              to="/tours"
              onClick={hideSubMenus}
              className={
                isScrolled
                  ? "relative group flex gap-1 items-center hover:bg-[#333333] hover:text-white w-fit px-4 hover:py-1"
                  : "relative group flex gap-1 items-center  hover:text-white w-fit px-4 hover:py-1"
              }
              onMouseEnter={() => setShowTours(true)}
              onMouseLeave={() => setShowTours(false)}
            >
              <p className="py-7">TOURS</p>
              <ChevronDown
                className={`text-[0.4rem] h-6 transition-transform duration-500 ease-in-out ${
                  showTours ? "rotate-180" : "rotate-0"
                }`}
              />
            </Link>

            {/* ABOUT Section */}
            <Link
              to="/about"
              onClick={hideSubMenus}
              className={
                isScrolled
                  ? "relative group flex gap-1 items-center hover:bg-[#333333] hover:text-white w-fit px-4 hover:py-1"
                  : "relative group flex gap-1 items-center  hover:text-white w-fit px-4 hover:py-1"
              }
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <p className="py-7" onClick={hideSubMenus}>
                ABOUT
              </p>
              <ChevronDown
                className={`text-[0.4rem] h-6 transition-transform duration-500 ease-in-out ${
                  showAbout ? "rotate-180" : "rotate-0"
                }`}
              />
            </Link>

            {/* CONTACT Section */}
            <Link
              to="#"
              className={
                isScrolled
                  ? "relative group flex gap-1 items-center hover:bg-[#333333] hover:text-white w-fit px-4 hover:py-1"
                  : "relative group flex gap-1 items-center  hover:text-white w-fit px-4 hover:py-1"
              }
            >
              <p onClick={hideSubMenus}>CONTACT</p>
            </Link>

            {/* EXPERIENCES Section */}
            <Link
              to="/"
              className={
                isScrolled
                  ? "relative group flex gap-1 items-center hover:bg-[#333333] hover:text-white w-fit px-4 hover:py-1"
                  : "relative group flex gap-1 items-center  hover:text-white w-fit px-4 hover:py-1"
              }
              onMouseEnter={() => setShowExperience(true)}
              onMouseLeave={() => setShowExperience(false)}
            >
              <Link to="#" className="py-7" onClick={hideSubMenus}>
                EXPERIENCES
              </Link>
              <ChevronDown
                className={`text-[0.4rem] h-6 transition-transform duration-500 ease-in-out ${
                  showExperience ? "rotate-180" : "rotate-0"
                }`}
              />
            </Link>
          </div>

          <div>
            {/* Translate Button */}
            {/* <div className=" flex bg-red-200">
              <TranslateButton />
            </div> */}
          </div>

          {/* Mobile Menu Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={isScrolled ? "text-[#333333] p-2" : "text-white p-2"}
            >
              <AlignJustify className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex flex-col bg-white w-full h-full p-6">
                <div className="flex justify-end items-center">
                  <button
                    onClick={closeMobileMenu}
                    className="text-black p-2 text-xl "
                  >
                    <X className="w-10 h-10" />
                  </button>
                </div>
                <div className="flex flex-col mt-8 mx-auto text-center font-cormorant font-normal">
                  <div>
                    <img
                      src={textLogo}
                      alt="Logo"
                      className="h-48 py-1 pt-2 mx-auto" // Larger logo size
                    />
                  </div>
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="text-black text-3xl py-3 "
                  >
                    HOME
                  </Link>
                  <Link
                    to="/tours"
                    onClick={closeMobileMenu}
                    className="text-black text-3xl py-3"
                  >
                    TOURS
                  </Link>
                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className="text-black text-3xl py-3"
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="text-black text-3xl py-3"
                  >
                    CONTACT
                  </Link>
                  <Link
                    to="/experience"
                    onClick={closeMobileMenu}
                    className="text-black text-3xl py-3"
                  >
                    EXPERIENCES
                  </Link>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {showTours && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={
            isScrolled
              ? " absolute left-0 top-[calc(4rem)] bg-white w-full shadow-md z-30 "
              : " absolute left-0 top-[calc(6rem)] bg-white w-full shadow-md z-30 "
          }
          onMouseEnter={() => setShowTours(true)}
          onMouseLeave={() => setShowTours(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
            {toursColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 text-gray-800 text-[0.9rem]">
                  {column.title}
                </h3>
                <ul>
                  {column.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-gray-950 cursor-pointer mb-1 text-[0.8rem] hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {showAbout && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={
            isScrolled
              ? " absolute left-0 top-[calc(4rem)] bg-white w-full shadow-md z-30 "
              : " absolute left-0 top-[calc(6rem)] bg-white w-full shadow-md z-30 "
          }
          onMouseEnter={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
            {aboutColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 text-gray-800 text-[0.9rem]">
                  {column.title}
                </h3>
                <ul>
                  {column.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-gray-950 cursor-pointer mb-1 text-[0.8rem] hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {showExperience && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={
            isScrolled
              ? " absolute left-0 top-[calc(4rem)] bg-white w-full shadow-md z-30 "
              : " absolute left-0 top-[calc(6rem)] bg-white w-full shadow-md z-30 "
          }
          onMouseEnter={() => setShowExperience(true)}
          onMouseLeave={() => setShowExperience(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
            {experienceColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 text-gray-800 text-[0.9rem]">
                  {column.title}
                </h3>
                <ul>
                  {column.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-gray-950 cursor-pointer mb-1 text-[0.8rem] hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
