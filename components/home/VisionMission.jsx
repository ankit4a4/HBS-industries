import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaStar, FaRocket } from "react-icons/fa";

const VisionMission = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full py-16 bg-black px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated background blobs (subtle, low-cost) */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full opacity-10 filter blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full opacity-10 filter blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Our <span className="text-blue-600">Vision</span> &{" "}
            <span className="text-purple-600">Mission</span>
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto text-lg">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCard("vision")}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className="h-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-200/20 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <motion.div
                    className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                  >
                    <FaEye size={28} />
                  </motion.div>
                  <h3
                    className={`text-2xl font-bold text-gray-200 ${
                      hoveredCard === "vision" ? "text-blue-400" : "text-gray-200"
                    } transition-colors duration-300`}
                  >
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To be the most trusted industrial partner by delivering safe,
                  reliable, and innovative products that empower businesses to achieve
                  greater efficiency and success.
                </p>
              </div>
              {/* Hover border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  boxShadow:
                    hoveredCard === "vision"
                      ? "0 0 20px rgba(37, 99, 235, 0.3)"
                      : "0 0 0px rgba(37, 99, 235, 0)",
                  borderColor:
                    hoveredCard === "vision" ? "rgba(37, 99, 235, 0.2)" : "transparent",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCard("mission")}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className="h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-200/20 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <motion.div
                    className="p-4 bg-purple-500 text-white rounded-2xl shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                  >
                    <FaBullseye size={28} />
                  </motion.div>
                  <h3
                    className={`text-2xl font-bold text-gray-200 ${
                      hoveredCard === "mission" ? "text-purple-400" : "text-gray-200"
                    } transition-colors duration-300`}
                  >
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To provide cost-effective, high-quality, and timely solutions while
                  building lasting relationships with our clients through trust,
                  innovation, and continuous improvement.
                </p>
              </div>
              {/* Hover border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  boxShadow:
                    hoveredCard === "mission"
                      ? "0 0 20px rgba(124, 58, 237, 0.3)"
                      : "0 0 0px rgba(124, 58, 237, 0)",
                  borderColor:
                    hoveredCard === "mission" ? "rgba(124, 58, 237, 0.2)" : "transparent",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
