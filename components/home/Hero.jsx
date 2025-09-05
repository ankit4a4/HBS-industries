"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import Iso from "@/public/images/home/ISO.png";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const isoRef = useRef(null);

  const backgrounds = [
    "https://wallpaperaccess.com/full/2577822.jpg",
    "https://static.vecteezy.com/system/resources/previews/027/928/517/non_2x/modern-chemical-industrial-equipment-distillation-columns-tanks-heat-exchangers-pipelines-with-valves-at-an-oil-refinery-petrochemical-plant-ai-generated-free-photo.jpg",
    "https://w3.windfair.net/uploads/notice/preview/41941/bladt_20220913.jpg",
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
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 1.2,
          stagger: 0.2,
        }
      );

      // ISO badge animation
      if (isoRef.current) {
        gsap.fromTo(
          isoRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: 1.5,
          }
        );
      }
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
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content + Right Badge */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-16">
        {/* Left Content */}
        <div className="text-left text-white max-w-2xl mt-20 lg:mt-0">
          {/* Badge */}
          <div className="inline-block bg-[#669bcc]/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">
              Since 2019
            </span>
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
            className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed"
          >
            Delivering superior quality industrial solutions with innovation,
            trust, and decades of expertise
          </p>

          {/* CTA Buttons */}
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
            <button className="hero-button bg-[#669bcc]  text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform   shadow-[#669bcc]/30 flex items-center gap-2">
              Explore Our Products
              <FaArrowRight className="w-5 h-5" />
            </button>

            <button className="hero-button bg-transparent hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side ISO Certification Badge */}
        <div className="hidden mr-[200px]  lg:flex justify-bottom items-center relative h-full mt-12 lg:mt-0">
          <div
            ref={isoRef}
            className="relative w-[220px] h-[220px] flex justify-center items-center"
          >
            {/* Rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#669bcc] border-dashed animate-spin-slow"></div>

            {/* Inner Circle */}
            <div className="relative z-10 w-[170px] h-[170px] rounded-full bg-white flex flex-col justify-center items-center shadow-lg shadow-[#669bcc]/40">
              <img
                src={Iso.src}
                alt="ISO Certified"
                className="h-[90%] w-[90%] mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
