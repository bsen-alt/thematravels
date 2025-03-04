import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import luxaryImg from "../assets/images/luxaryCard.jpg";
import romanticImg from "../assets/images/romanticCard.jpg";
import themaImg from "../assets/images/themaCard.jpg"; // Replace with actual image
import beachImg from "../assets/images/beachCard.jpg"; // Replace with actual image
import mandalaImg from "../assets/images/mandala1 (1).png";

const featuredPackages = [
  {
    title: "Opulent Odyssey",
    description:
      "Indulge in world-class services, luxurious accommodations, and bespoke experiences crafted for those who seek the finest in life.",
    image: luxaryImg,
  },
  {
    title: "Eternal Euphoria",
    description:
      "Create magical moments with your loved one in enchanting destinations. Perfect for honeymoons, anniversaries, or simply a romantic getaway.",
    image: romanticImg,
  },
  {
    title: "Wanderer’s Yatra",
    description:
      "Experience unique, thematic journeys tailored to your interests. Whether cultural, adventurous, or wellness-focused, we have it all.",
    image: themaImg,
  },
  {
    title: "Beach and Chill",
    description:
      "Escape to pristine beaches, soak up the sun, and enjoy the calming waves. The ultimate destination for relaxation and tranquility.",
    image: beachImg,
  },
];

const FeaturedPackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="relative w-full bg-white py-24 px-8 md:px-16 lg:px-24"
      ref={ref}
      style={{
        zIndex: 10,
      }}
    >
      {/* Mandala Image */}
      <img
        src={mandalaImg}
        alt=""
        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[36rem] opacity-15 pointer-events-none z-0"
      />

      {/* Left Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 mb-12 md:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold font-cinzel mb-6">
            Featured Packages
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            <span className="mb-2">
              Our featured packages are crafted to deliver the ultimate travel
              experience, blending luxury, adventure, and relaxation into
              unforgettable journeys. Each package has been thoughtfully curated
              to cater to a variety of interests, ensuring there’s something
              special for everyone.
            </span>{" "}
            <br /> <br />
            <span className="mb-2">
              Whether you’re dreaming of indulgent luxury escapes with
              world-class accommodations, romantic getaways to celebrate love
              and connection, or thrilling adventures that ignite your passion
              for exploration, we have it all. Our packages are designed to
              immerse you in unique experiences, allowing you to create memories
              that last a lifetime.
            </span>
            <br /> <br />
            <span>
              For those seeking tranquility, unwind with our serene beach
              retreats where the soothing sounds of the ocean and pristine
              landscapes will rejuvenate your soul. If you crave something
              extraordinary, our thematic packages offer tailored experiences
              that align with your specific interests, from cultural
              explorations to wellness journeys.
            </span>
          </p>
        </div>

        {/* Cards Section */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              className="relative h-48 sm:h-72 md:h-64 w-80  shadow-md overflow-hidden group rounded-lg"
              style={{
                backgroundImage: `url(${pkg.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {/* Darker Overlay on Hover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-4 group">
                {/* Title */}
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-cormorant font-bold transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-in-out mb-4"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ opacity: 1, y: 20 }}
                >
                  {pkg.title}
                </motion.h3>

                {/* Description and Button (Hidden by Default) */}
                <motion.div
                  className="opacity-0 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 px-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <p className="text-sm md:text-[.8rem] leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                  <button className="bg-transparent border text-white py-2 px-4 text-[.8rem] hover:bg-[#333333] transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg">
                    FIND OUT MORE
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
