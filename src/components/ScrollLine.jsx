import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Track scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen bg-gray-50">
      {/* The line that follows the scroll */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-primary h-full"
        style={{ top: scrollPosition }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Optional: Paint shapes along the scroll */}
        <motion.div
          className="absolute left-10 top-20 w-10 h-10 rounded-full bg-blue-500"
          initial={{ opacity: 0 }}
          animate={{
            opacity: scrollPosition > 100 ? 1 : 0,
            y: scrollPosition > 100 ? 100 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Content to make the page scrollable */}
      <div className="h-screen bg-gray-100">Scroll down to see the effect</div>
      <div className="h-screen bg-gray-200">More content...</div>
      <div className="h-screen bg-gray-300">Even more content...</div>
    </div>
  );
};

export default ScrollLine;
