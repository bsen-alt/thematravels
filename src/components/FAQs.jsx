import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing arrow icons

const FAQs = () => {
  const [expanded, setExpanded] = useState({}); // Initialize an empty object for expanded states

  const toggleFAQ = (categoryIndex, faqIndex) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === faqIndex ? null : faqIndex,
    }));
  };

  const categories = [
    {
      title: "Booking Process",
      questions: [
        {
          question: "How can I book a tour with you?",
          answer:
            "You can book a tour directly on our website or by contacting our customer support team for personalized assistance.",
        },
        {
          question: "What information do I need to provide for booking?",
          answer:
            "You'll need to provide your personal details, tour preferences, and payment information to complete the booking.",
        },
        {
          question: "Can I modify my booking after confirmation?",
          answer:
            "Yes, modifications can be made based on availability and our policies. Please contact us as soon as possible to make changes.",
        },
      ],
    },
    {
      title: "Cancellation Policy",
      questions: [
        {
          question: "What is your cancellation policy?",
          answer:
            "Cancellations made at least 14 days before the tour will receive a full refund. Cancellations within 14 days may incur a fee, depending on the tour type.",
        },
        {
          question: "Can I cancel my tour online?",
          answer:
            "Yes, you can cancel your tour via your account on our website or by reaching out to our customer support team.",
        },
        {
          question: "Will I get a refund if I cancel?",
          answer:
            "Refund eligibility depends on the timing of the cancellation. Please refer to our cancellation policy for detailed information.",
        },
      ],
    },
    {
      title: "Custom Tours",
      questions: [
        {
          question: "Can I customize my tour itinerary?",
          answer:
            "Absolutely! We offer personalized tours where you can choose the destinations, activities, and travel dates.",
        },
        {
          question: "How do I request a custom tour?",
          answer:
            "Simply fill out the custom tour request form on our website, or reach out to our customer service team for assistance.",
        },
        {
          question: "What are the additional costs for custom tours?",
          answer:
            "Custom tours may involve additional costs based on the destinations and activities you choose. We’ll provide a detailed quote before confirmation.",
        },
      ],
    },
  ];

  return (
    <div className="py-16 bg-[#f3eeed] px-6 sm:px-12 md:px-24 lg:px-32">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-900 font-cinzel">
        FAQs
      </h2>
      <div className="flex flex-col sm:flex-row sm:space-x-8 justify-between">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col w-full sm:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 mt-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.questions.map((faq, faqIndex) => (
                <motion.div
                  key={faqIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: faqIndex * 0.2 }}
                >
                  <div
                    className="border-b border-gray-300 cursor-pointer flex items-center justify-between py-3"
                    onClick={() => toggleFAQ(categoryIndex, faqIndex)} // Update the state for the specific category and question
                  >
                    <p className="text-lg sm:text-xl font-medium text-gray-800 font-cormorant">
                      {faq.question}
                    </p>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: expanded[categoryIndex] === faqIndex ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {expanded[categoryIndex] === faqIndex ? (
                        <ChevronUp size={24} className="text-gray-600" />
                      ) : (
                        <ChevronDown size={24} className="text-gray-600" />
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight:
                        expanded[categoryIndex] === faqIndex ? "500px" : "0", // Control the expansion and collapse
                    }}
                  >
                    {expanded[categoryIndex] === faqIndex && (
                      <motion.div
                        className="p-4 text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
