import React from "react";
import { useEffect, useRef } from "react";
import headerVid from "../assets/vid/headerVid2.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    let isPlayingForward = true;

    // Function to reverse video playback
    const handleVideoLoop = () => {
      if (video.paused || video.ended) return;

      if (isPlayingForward) {
        // Reverse direction when the video ends
        if (video.currentTime >= video.duration) {
          isPlayingForward = false;
          video.currentTime = video.duration - 0.5;
        }
      } else {
        // Reverse direction when the video starts
        if (video.currentTime <= 0) {
          isPlayingForward = true;
          video.currentTime = 0.5;
        }
      }

      // Continue looping playback
      requestAnimationFrame(handleVideoLoop);
    };

    handleVideoLoop();

    return () => {
      // Cleanup on unmount
      cancelAnimationFrame(handleVideoLoop);
    };
  }, []);

  return (
    <div className="relative h-[calc(100vh-5rem)] w-full">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0 mx-4 mb-4">
        {/* Video Background */}
        <video
          ref={videoRef}
          src={headerVid}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-screen"
        ></video>
      </div>

      {/* Hero Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center bg-black bg-opacity-30 mx-8  rounded-lg">
        <h1 className="text-5xl font-light font-serif">Shangri-La Colombo</h1>
        <p className="mt-4 text-xl font-normal font-poppins">
          A personal tropical sanctuary set within the heart of the city
        </p>
      </div> */}
    </div>
  );
};

export default HeroSection;
