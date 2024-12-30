import React, { useState } from "react";

const CustomizeTourPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    budget: [500, 2000],
    arrivalDate: "",
    departureDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    accommodationType: "",
    mealPreference: "",
    mealPlan: "",
    tourPreferences: [],
    placesToVisit: [],
    specialFacilities: [],
    transportation: "",
    specialRequests: "",
  });

  const tourOptions = [
    "Sightseeing",
    "Sporting",
    "Adventure Tours",
    "Safari",
    "Beaches",
    "Natural Scenic",
    "Zoological Gardens",
    "Bird Watching",
    "Heritage",
    "Pilgrimage",
    "Culture",
    "Surfing",
    "Whale Watching",
    "Mountains and Waterfalls",
    "Tea Plantations",
    "Cycling",
    "Hiking",
    "Trekking",
    "Camping",
    "Glamping",
  ];

  const placeOptions = [
    { category: "Western Province", places: ["Colombo", "Negombo"] },
    { category: "Central Province", places: ["Kandy", "Nuwara Eliya"] },
    { category: "Southern Province", places: ["Galle", "Mirissa"] },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#333333] via-[#5C4033] to-[#C19A6B] text-white pt-[10rem]">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center">
          <h1 className="text-[4rem] font-cinzel">Customize Your Tour</h1>
          <p className="text-lg">Create your dream getaway effortlessly!</p>
        </header>

        <form className="space-y-6">
          {/* Personal Details */}
          <div>
            <h2 className="text-2xl font-semibold">Personal Details</h2>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-3 rounded-md text-black mb-3"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-3 rounded-md text-black mb-3"
            />
            <div className="flex gap-4">
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="w-1/2 p-3 rounded-md text-black"
              />
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleInputChange}
                placeholder="WhatsApp Number"
                className="w-1/2 p-3 rounded-md text-black"
              />
            </div>
          </div>

          {/* Budget and Travel */}
          <div>
            <h2 className="text-2xl font-semibold">
              Budget and Travel Details
            </h2>
            <div className="flex gap-4">
              <input
                type="number"
                name="budget"
                value={form.budget[0]}
                onChange={(e) =>
                  setForm({
                    ...form,
                    budget: [+e.target.value, form.budget[1]],
                  })
                }
                placeholder="Lowest Budget"
                className="w-1/2 p-3 rounded-md text-black"
              />
              <input
                type="number"
                name="budget"
                value={form.budget[1]}
                onChange={(e) =>
                  setForm({
                    ...form,
                    budget: [form.budget[0], +e.target.value],
                  })
                }
                placeholder="Highest Budget"
                className="w-1/2 p-3 rounded-md text-black"
              />
            </div>
            <div className="flex gap-4 mt-3">
              <input
                type="date"
                name="arrivalDate"
                value={form.arrivalDate}
                onChange={handleInputChange}
                className="w-1/2 p-3 rounded-md text-black"
              />
              <input
                type="date"
                name="departureDate"
                value={form.departureDate}
                onChange={handleInputChange}
                className="w-1/2 p-3 rounded-md text-black"
              />
            </div>
            <div className="flex gap-4 mt-3">
              <input
                type="number"
                name="adults"
                value={form.adults}
                onChange={handleInputChange}
                placeholder="Adults"
                className="w-1/3 p-3 rounded-md text-black"
              />
              <input
                type="number"
                name="children"
                value={form.children}
                onChange={handleInputChange}
                placeholder="Children"
                className="w-1/3 p-3 rounded-md text-black"
              />
              <input
                type="number"
                name="infants"
                value={form.infants}
                onChange={handleInputChange}
                placeholder="Infants"
                className="w-1/3 p-3 rounded-md text-black"
              />
            </div>
          </div>

          {/* Tour Preferences */}
          <div>
            <h2 className="text-2xl font-semibold">Tour Preferences</h2>
            <div className="flex flex-wrap gap-2">
              {tourOptions.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.tourPreferences.includes(option)}
                    onChange={() =>
                      handleMultiSelect("tourPreferences", option)
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Places to Visit */}
          <div>
            <h2 className="text-2xl font-semibold">Places to Visit</h2>
            {placeOptions.map(({ category, places }) => (
              <div key={category}>
                <h3 className="font-semibold mt-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {places.map((place) => (
                    <label key={place} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={form.placesToVisit.includes(place)}
                        onChange={() =>
                          handleMultiSelect("placesToVisit", place)
                        }
                      />
                      {place}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Special Facilities */}
          <div>
            <h2 className="text-2xl font-semibold">Special Facilities</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Wheelchair Support",
                "Translator",
                "Tour Guide",
                "Infant Care",
              ].map((facility) => (
                <label key={facility} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.specialFacilities.includes(facility)}
                    onChange={() =>
                      handleMultiSelect("specialFacilities", facility)
                    }
                  />
                  {facility}
                </label>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div>
            <h2 className="text-2xl font-semibold">Transportation</h2>
            <select
              name="transportation"
              value={form.transportation}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md text-black"
            >
              <option value="">Select Transportation</option>
              <option value="Vehicle with Driver">Vehicle with Driver</option>
              <option value="Vehicle without Driver">
                Vehicle without Driver
              </option>
              <option value="Tuktuk">Tuktuk</option>
              <option value="Motorbike">Motorbike</option>
              <option value="AC Car">AC Car</option>
              <option value="Non-AC Car">Non-AC Car</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <h2 className="text-2xl font-semibold">Special Requests</h2>
            <textarea
              name="specialRequests"
              value={form.specialRequests}
              onChange={handleInputChange}
              placeholder="Enter any special requests"
              className="w-full p-3 rounded-md text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600"
          >
            Submit Your Tour Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomizeTourPage;
