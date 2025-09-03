import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const backgrounds = [
    "https://wallpaperaccess.com/full/2577822.jpg",
    "https://static.vecteezy.com/system/resources/previews/027/928/517/non_2x/modern-chemical-industrial-equipment-distillation-columns-tanks-heat-exchangers-pipelines-with-valves-at-an-oil-refinery-petrochemical-plant-ai-generated-free-photo.jpg",
    "https://w3.windfair.net/uploads/notice/preview/41941/bladt_20220913.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.8 }
      );

      // Button animation
      gsap.fromTo(
        ".hero-button",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 1.2 }
      );

      // Scroll indicator animation
      gsap.to(".scroll-indicator-dot", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2,
      });

      // Background parallax effect
      gsap.to(".hero-bg", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] max-h-[800px] overflow-hidden"
    >
      {/* Background Images with Transition */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out hero-bg ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})`, zIndex: 1 }}
        />
      ))}

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl">
          {/* Badge */}
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">Since 2019</span>
          </div>

          {/* Main Heading */}
          <h1
            ref={textRef}
            className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block">Precision Engineering</span>
            <span className="block text-blue-400 mt-2">Excellence Defined</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={textRef}
            className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering superior quality industrial solutions with innovation, trust, and decades of expertise
          </p>

          {/* CTA Buttons */}
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="hero-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 flex items-center gap-2">
              Explore Our Products
              <FaArrowRight className="w-5 h-5" />
            </button>

            <button className="hero-button bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5" />
              Contact Us
            </button>
          </div>

          {/* Stats */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
