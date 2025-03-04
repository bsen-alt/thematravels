import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectItem } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/datepicker";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-8 bg-gray-900 p-8 rounded-2xl shadow-lg">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400">
            Customize Your Exclusive Tour
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Plan the perfect getaway with tailored experiences!
          </p>
        </header>

        <Card className="bg-gray-800 shadow-xl p-6 space-y-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Personal Details
          </h2>
          <Input
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="bg-gray-700 text-white"
          />
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="bg-gray-700 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="bg-gray-700 text-white"
            />
            <Input
              type="tel"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleInputChange}
              placeholder="WhatsApp Number"
              className="bg-gray-700 text-white"
            />
          </div>
        </Card>

        <Card className="bg-gray-800 shadow-xl p-6 space-y-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Travel Budget
          </h2>
          <Slider
            min={500}
            max={10000}
            step={100}
            value={form.budget}
            onChange={(val) => setForm({ ...form, budget: val })}
          />
          <p className="text-gray-300">
            Budget: ${form.budget[0]} - ${form.budget[1]}
          </p>
        </Card>

        <Card className="bg-gray-800 shadow-xl p-6 space-y-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Tour Preferences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tourOptions.map((option) => (
              <Checkbox
                key={option}
                checked={form.tourPreferences.includes(option)}
                onChange={() => handleMultiSelect("tourPreferences", option)}
              >
                {option}
              </Checkbox>
            ))}
          </div>
        </Card>

        <Card className="bg-gray-800 shadow-xl p-6 space-y-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Special Requests
          </h2>
          <Textarea
            name="specialRequests"
            value={form.specialRequests}
            onChange={handleInputChange}
            placeholder="Enter any special requests"
            className="bg-gray-700 text-white"
          />
        </Card>

        <Button className="w-full py-3 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 transition rounded-lg shadow-md">
          Submit Your Tour Plan
        </Button>
      </div>
    </div>
  );
};

export default CustomizeTourPage;
