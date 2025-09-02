import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "/images/home/logo-1.jpg",
  "/images/home/logo-2.jpg",
  "/images/home/logo-3.jpg",
  "/images/home/logo-4.jpg",
  "/images/home/logo-5.jpg",
  "/images/home/logo-6.jpg",
  "/images/home/logo-7.jpg",
  "/images/home/logo-8.jpg",
  "/images/home/logo-9.jpg",
  "/images/home/logo-10.jpg",
  "/images/home/logo-11.jpg",
  "/images/home/logo-12.jpg",
  "/images/home/logo-13.jpg",
  "/images/home/logo-14.jpg",
  "/images/home/logo-15.jpg",
  "/images/home/logo-16.jpg",
  "/images/home/logo-17.jpg",
  "/images/home/logo-18.jpg",
  "/images/home/logo-19.jpg",
  "/images/home/logo-20.jpg",
  "/images/home/logo-21.jpg",
];

const LogoMarquee = () => {
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="w-full py-8 md:py-20 px-6 md:px-16 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're proud to partner with the most innovative companies in the industry
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee 1 - Left to Right */}
          <motion.div
            className="flex gap-6 md:py-8 md:mb-8 py-4"
            ref={marqueeRef}
            animate={{ x: [0, -marqueeWidth] }}
            transition={{
              repeat: Infinity,
              duration: 120, // slow
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`Company Logo ${i + 1}`}
                className="h-20 w-auto object-contain  transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>

          {/* Marquee 2 - Right to Left */}
          <motion.div
            className="flex gap-6 py-8"
            animate={{ x: [-marqueeWidth, 0] }}
            transition={{
              repeat: Infinity,
              duration: 130,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`Company Logo ${i + 1}`}
                className="h-20 w-auto object-contain  transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
