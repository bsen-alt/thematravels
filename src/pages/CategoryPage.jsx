import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import flowerImg from "../assets/images/flower.png";
import tourluxary1 from "../assets/images/luxaryt1.jpeg";
import tourluxary2 from "../assets/images/luxaryt2.jpg";
import tourromance1 from "../assets/images/romantict1.jpg";
import tourromance2 from "../assets/images/romantict2.jpg";
import tourthema from "../assets/images/themaspt.jpeg";
import tourbeach1 from "../assets/images/beacht1.jpg";
import tourbeach2 from "../assets/images/beacht2.jpg";
import tourholiday1 from "../assets/images/holidayt1.jpg";
import tourholiday2 from "../assets/images/holidayt2.jpg";
import tournature1 from "../assets/images/naturet1.jpg";
import tournature2 from "../assets/images/naturet2.jpg";
import tourwildlife1 from "../assets/images/safarit1.jpg";
import tourwildlife2 from "../assets/images/wildlifet2.jpg";
import tourculture1 from "../assets/images/culturet1.jpg";
import tourculture2 from "../assets/images/culturet2.jpg";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [tours, setTours] = useState([]);

  const categoryTitles = {
    luxury: "Luxury",
    romantic: "Romantic",
    "thematic special": "Thematic Special",
    "beach and chill": "Beach and Chill",
    "hike bike and kayak": "Hike, Bike, and Kayak",
    "holiday and vacation": "Holiday and Vacation",
    "feel the nature": "Feel the Nature",
    "ayurweda and wellness": "Ayurveda and Wellness",
    "wildlife and safari": "Wildlife and Safari",
    "culture and history": "Culture and History",
  };

  useEffect(() => {
    const allTours = [
      {
        id: 1,
        category: "luxury",
        title: "4-Day Luxury",
        description: "A thrilling mountain hiking tour.",
        image: tourluxary1,
      },
      {
        id: 2,
        category: "luxury",
        title: "7-Day Luxury",
        description: "Climbing the best rocks.",
        image: tourluxary2,
      },
      {
        id: 3,
        category: "romantic",
        title: "8-Day Honeymoon",
        description: "A relaxing beach holiday.",
        image: tourromance1,
      },
      {
        id: 4,
        category: "romantic",
        title: "A Quick Honeymoon",
        description: "Explore underwater life.",
        image: tourromance2,
      },
      {
        id: 5,
        category: "thematic special",
        title: "2-Week All Around Sri Lanka",
        description: "A relaxing beach holiday.",
        image: tourthema,
      },
      {
        id: 6,
        category: "beach and chill",
        title: "3-Day Standard Package",
        description: "Explore underwater life.",
        image: tourbeach1,
      },
      {
        id: 7,
        category: "beach and chill",
        title: "5-Day Luxury Package",
        description: "Explore underwater life.",
        image: tourbeach2,
      },
      {
        id: 8,
        category: "hike bike and kayak",
        title: "2-Day Adventure",
        description: "Explore underwater life.",
        image: tourbeach2,
      },
      {
        id: 9,
        category: "hike bike and kayak",
        title: "4-Day Adventure",
        description: "Explore underwater life.",
        image: tourbeach2,
      },
      {
        id: 10,
        category: "holiday and vacation",
        title: "5-Day Holiday Package",
        description: "Explore underwater life.",
        image: tourholiday1,
      },
      {
        id: 11,
        category: "holiday and vacation",
        title: "7-Day Vacation Package",
        description: "Explore underwater life.",
        image: tourholiday2,
      },
      {
        id: 12,
        category: "feel the nature",
        title: "3-Day Nature Escape",
        description: "Explore underwater life.",
        image: tournature1,
      },
      {
        id: 13,
        category: "feel the nature",
        title: "5-Day Wilderness Adventure",
        description: "Explore underwater life.",
        image: tournature2,
      },
      {
        id: 14,
        category: "ayurweda and wellness",
        title: "3-Day Wellness Retreat",
        description: "Explore underwater life.",
      },
      {
        id: 15,
        category: "ayurweda and wellness",
        title: "7-Day Complete Wellness Program",
        description: "Explore underwater life.",
      },
      {
        id: 16,
        category: "wildlife and safari",
        title: "2-Day Safari Adventure",
        description: "Explore underwater life.",
        image: tourwildlife1,
      },
      {
        id: 17,
        category: "wildlife and safari",
        title: "5-Day Wildlife Exploration",
        description: "Explore underwater life.",
        image: tourwildlife2,
      },
      {
        id: 18,
        category: "culture and history",
        title: "3-Day Cultural Tour",
        description: "Explore underwater life.",
        image: tourculture1,
      },
      {
        id: 19,
        category: "culture and history",
        title: "7-Day Heritage Journey",
        description: "Explore underwater life.",
        image: tourculture2,
      },
    ];

    // Filter tours based on category (standardize comparison)
    const filteredTours = allTours.filter(
      (tour) => tour.category.toLowerCase() === categoryName.toLowerCase()
    );

    setTours(filteredTours);
  }, [categoryName]);

  return (
    <div className="mt-36 px-4 sm:px-8 md:px-16 lg:px-32 w-full text-center justify-center">
      {/* Title and Description */}
      <div className="text-center mb-12 max-w-[600px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold font-cinzel">
          {categoryTitles[categoryName] || "Unknown"} Tours
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {tours.length > 0 ? (
          tours.map((tour) => (
            <div
              key={tour.id}
              className="relative group overflow-hidden cursor-pointer transform transition-all rounded-lg"
            >
              <Link to={`/tour/${tour.id}`}>
                {/* Card Background Image */}
                <div
                  className="w-full h-[30rem] sm:h-[25rem] lg:h-[30rem] bg-cover bg-center transition-all duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url(${tour.image})`,
                  }}
                ></div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out text-center">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-2xl transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    {tour.title}
                  </h3>
                  <p className="text-white text-md sm:text-lg font-cormorant transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    {tour.description || "Explore this amazing tour"}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-transparent border text-white py-2 px-4 text-[.8rem] sm:text-sm hover:bg-[#333333] transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg">
                      VIEW MORE
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No tours available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
