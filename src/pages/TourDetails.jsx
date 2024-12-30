import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toursData from "../tours_standardized.json";

import dummyImg from "../assets/images/dummyImg.jpg";
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

const TourDetails = () => {
  const { tourId } = useParams(); // Get the tour ID from the URL
  const [activeTab, setActiveTab] = useState("Itinerary"); // Manage active tab

  // Mock tour data (use your actual data source here)
  const allTours = toursData;
  // Find the specific tour by ID
  const tour = allTours.find((tour) => tour.id === parseInt(tourId));

  // Helper function to dynamically import images
  const getImage = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (error) {
      console.warn(`Image not found: ${imageName}`);
      return dummyImg; // Fallback to a default image
    }
  };

  if (!tour) {
    return <div>Tour not found.</div>; // Handle invalid tour IDs
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-[6rem]  w-full">
      {/* Cover Image */}
      <img
        src={getImage(tour.image)}
        alt={tour.title}
        className="w-full h-[45vh] object-cover "
      />

      {/* Horizontal Section */}
      <div className="flex justify-between items-center bg-[#333] text-white sticky top-12 z-10 py-4 px-24 shadow-md">
        <h1 className="text-2xl font-semibold">{tour.title}</h1>
        <div className="flex space-x-4">
          {["Itinerary", "Inclusions", "Summary"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 font-medium ${
                activeTab === tab
                  ? "text-orange-200 border-b-2 border-orange-200"
                  : "text-gray-200"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-gray-100 sticky top-28 z-10 py-2 px-24 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Duration */}
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-2">Duration:</p>
            <p className="text-lg font-semibold">{tour.duration}</p>
          </div>

          {/* Price in USD */}
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-2">Price:</p>
            <p className="text-lg font-bold">USD {tour.price}</p>
          </div>

          {/* Price in LKR */}
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-2">Equivalent:</p>
            <p className="text-lg text-gray-600">
              LKR {tour.price * 360} per person
            </p>
          </div>
        </div>

        {/* Inquiry Button */}
        <button className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#555555]">
          Inquire Now
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-6 px-4 sm:px-8 md:px-16 lg:px-32">
        {activeTab === "Itinerary" && (
          <div>
            {tour.itinerary.map((day, index) => (
              <details key={index} open className="mb-4 border rounded-lg">
                <summary className="cursor-pointer bg-gray-200 px-4 py-2 font-semibold">
                  Day {day.day}: {day.title}
                </summary>
                <p className="px-4 py-2 text-gray-600">{day.description}</p>
                <p className="px-4 text-sm">
                  Accommodation: {day.accommodation}
                </p>
                <p className="px-4 text-sm">Meal Plan: {day.mealPlan}</p>
                <p className="px-4 text-sm">Travel Time: {day.travelTime}</p>
                <p className="px-4 text-sm">
                  Transfer Mode: {day.transferMode}
                </p>
                {day.areaHighlights?.map((highlight, i) => (
                  <div key={i} className="px-4 mt-2">
                    <strong>{highlight.title}</strong>: {highlight.description}
                    <div className="flex gap-2 mt-2">
                      {highlight.images?.map((img, j) => (
                        <img
                          key={j}
                          src={getImage(img)}
                          alt={highlight.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </details>
            ))}
          </div>
        )}
        {activeTab === "Inclusions" && (
          <ul className="list-disc pl-6 text-gray-600">
            {tour.highlights.map((highlight, index) => (
              <li key={index}>
                <strong>{highlight.title}</strong>: {highlight.description}
                <div className="flex gap-2 mt-2">
                  {highlight.images?.map((img, i) => (
                    <img
                      key={i}
                      src={getImage(img)}
                      alt={highlight.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
        {activeTab === "Summary" && (
          <p className="text-gray-600">{tour.description}</p>
        )}
      </div>

      {/* Tour Map */}
      <div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-2xl font-bold mb-4">Tour Map</h2>
        <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">[Tour Map Placeholder]</p>
        </div>
      </div>

      {/* Reviews and Related Tours */}
      <div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-32 mb-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <p className="text-gray-600">[Reviews Placeholder]</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Related Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTours
            .filter(
              (relatedTour) =>
                relatedTour.category === tour.category &&
                relatedTour.id !== tour.id
            )
            .map((relatedTour) => (
              <div key={relatedTour.id} className="border rounded-lg p-4">
                <img
                  src={getImage(relatedTour.image)}
                  alt={relatedTour.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{relatedTour.title}</h3>
                <p className="text-gray-600">USD {relatedTour.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
