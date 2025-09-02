import React, { useEffect, useState } from "react";
import img1 from "@/public/images/home/banner-main.jpg";
import img2 from "@/public/images/home/banner2.jpg";
import img3 from "@/public/images/home/banner3.jpg";

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [img1.src, img2.src, img3.src];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          HBS Industries
        </h1>
        <p className="text-lg md:text-2xl text-blue-200 mb-8">
          Founded in 2019 • Quality • Trust • Innovation
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
          Explore More
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
