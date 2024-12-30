import { Link } from "react-router-dom";
import flowerImg from "../assets/images/flower.png";
import { motion } from "framer-motion";
import luxaryImg1 from "../assets/images/luxaryimg.jpg";
import themaImg2 from "../assets/images/themaimg.jpg";
import beachImg3 from "../assets/images/beachimg.jpg";
import bikeImg4 from "../assets/images/bikingimg.jpg";
import holidayImg5 from "../assets/images/holidayimg.jpg";
import natureImg6 from "../assets/images/natureimg.jpg";
import wellnessImg7 from "../assets/images/wellnessimg.jpeg";
import wildlifeImg8 from "../assets/images/wildlifeimg2.jpg";
import cultureImg9 from "../assets/images/cultureimg.jpg";
import romanticImg10 from "../assets/images/romanticimg.jpg";

const toursCategories = [
  { title: "Luxury", link: "/category/luxury", image: luxaryImg1 },
  { title: "Romantic", link: "/category/romantic", image: romanticImg10 },
  {
    title: "Thematic Special",
    link: "/category/thematic",
    image: themaImg2,
  },
  {
    title: "Beach and Chill",
    link: "/category/beach",
    image: beachImg3,
  },
  {
    title: "Hike, Bike, and Kayak",
    link: "/category/hike",
    image: bikeImg4,
  },
  {
    title: "Holiday and Vacation",
    link: "/category/holiday",
    image: holidayImg5,
  },
  {
    title: "Feel the Nature",
    link: "/category/nature",
    image: natureImg6,
  },
  {
    title: "Ayurveda and Wellness",
    link: "/category/wellness",
    image: wellnessImg7,
  },
  {
    title: "Wildlife and Safari",
    link: "/category/wildlife",
    image: wildlifeImg8,
  },
  {
    title: "Culture and History",
    link: "/category/culture",
    image: cultureImg9,
  },
];

const ToursPage = () => {
  return (
    <div className="p-8 mt-24 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      {/* Title and Description */}
      <div className="text-center mb-12 max-w-[600px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold font-cinzel">
          Tours of Thema
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600">
          Explore the best tours to experience your dream getaway
        </h2>
        {/* Flower Image with Animation */}
        <motion.img
          src={flowerImg}
          alt="Rotating Flower"
          className="w-10 sm:w-12 mx-auto mt-2"
          animate={{
            rotate: 360, // Rotate 360 degrees
          }}
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 8, // Duration of each rotation (seconds)
            ease: "linear", // Smooth constant speed
          }}
        />
        <p className="text-md sm:text-lg text-gray-500 mt-4 font-cormorant">
          Discover our curated collection of themed tours tailored to every type
          of traveler. Whether you're looking for luxury, adventure, or
          relaxation, we have something special just for you.
        </p>
      </div>

      {/* Tour Categories Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {toursCategories.map((category) => (
          <div
            key={category.title}
            className="relative group overflow-hidden cursor-pointer transform transition-all rounded-lg"
          >
            <Link to={`/category/${category.title.toLowerCase()}`}>
              {/* Card Background Image */}
              <div
                className="w-full h-[30rem] sm:h-[25rem] lg:h-[30rem] bg-cover bg-center transition-all duration-300 ease-in-out"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out text-center">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-2xl transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  {category.title}
                </h3>
                <h4 className="text-white text-md sm:text-lg font-cormorant transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  {category.subtitle ||
                    "Explore the best tour in this category"}
                </h4>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <button className="bg-transparent border text-white py-2 px-4 text-[.8rem] sm:text-sm hover:bg-[#333333] transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg">
                    FIND OUT MORE
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
