import { useEffect, useRef, useState } from "react";

const TranslateButton = () => {
  const googleTranslateRef = useRef(null);
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
    // Load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        // Initialize the Google Translate widget
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default page language
            includedLanguages: "en,fr,it,ru,zh,de,es,ja", // Languages to show
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL, // Inline horizontal layout
            autoDisplay: false, // Do not auto-display widget on load
          },
          googleTranslateRef.current
        );
        setIsTranslateReady(true); // Mark as ready
      }
    };

    if (!window.google) {
      addGoogleTranslateScript();
    } else {
      checkGoogleTranslate(); // If script is already loaded, initialize
    }

    const intervalId = setInterval(checkGoogleTranslate, 100);
    return () => clearInterval(intervalId);
  }, []);

  // Trigger translation manually
  const triggerTranslation = (lang) => {
    const googleTranslateElement = window.google.translate.TranslateElement;
    if (googleTranslateElement) {
      googleTranslateElement.prototype.showBanner = function () {};
      const selectElement = document.querySelector(
        "#google_translate_element select"
      );
      if (selectElement) {
        selectElement.value = lang; // Set selected language
        selectElement.dispatchEvent(new Event("change")); // Trigger translation
      }
    }
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "it", name: "Italian", flag: "🇮🇹" },
    { code: "ru", name: "Russian", flag: "🇷🇺" },
    { code: "zh", name: "Chinese", flag: "🇨🇳" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "ja", name: "Japanese", flag: "🇯🇵" },
  ];

  return (
    <div className="relative">
      {/* Google Translate widget */}
      <div
        ref={googleTranslateRef}
        className="absolute right-0  mr-3 p-2 bg-white rounded-lg shadow-lg"
      ></div>

      {/* Hide "Powered by Google" and style the select dropdown */}
      <style jsx>{`
        #google_translate_element .goog-te-gadget-simple {
          display: none;
        }
        #google_translate_element select {
          font-size: 14px;
          background-color: #f0f0f0;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default TranslateButton;
