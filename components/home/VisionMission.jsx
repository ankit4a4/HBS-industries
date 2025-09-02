import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaLightbulb, FaRocket, FaStar, FaHeart } from "react-icons/fa";

const VisionMission = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full py-6 bg-black  md:py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Vision Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            onHoverStart={() => setHoveredCard("vision")}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className="h-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-200/30 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400 rounded-full opacity-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-400 rounded-full opacity-10"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Floating particles */}
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <motion.div
                    className="p-5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg relative"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <FaEye size={28} />
                    {/* Icon shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 rounded-2xl"
                      animate={{ 
                        opacity: hoveredCard === "vision" ? [0, 0.3, 0] : 0,
                        x: hoveredCard === "vision" ? [-100, 100] : 0,
                      }}
                      transition={{ 
                        duration: 0.8,
                        times: [0, 0.5, 1]
                      }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-200"
                    animate={{ 
                      color: hoveredCard === "vision" ? "#2563eb" : "#ffffff" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Our Vision
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-200 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  To be the most trusted industrial partner by delivering safe,
                  reliable, and innovative products that empower businesses to achieve
                  greater efficiency and success.
                </motion.p>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-4 right-4 text-blue-300"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <FaStar size={18} />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 text-cyan-300"
                  animate={{ rotate: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <FaLightbulb size={16} />
                </motion.div>
              </div>
              
              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  boxShadow: hoveredCard === "vision" 
                    ? "0 0 25px rgba(37, 99, 235, 0.3)" 
                    : "0 0 0px rgba(37, 99, 235, 0)",
                  borderColor: hoveredCard === "vision" 
                    ? "rgba(37, 99, 235, 0.2)" 
                    : "transparent"
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
            viewport={{ once: true, margin: "-50px" }}
            onHoverStart={() => setHoveredCard("mission")}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className="h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-200/30 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-20 -left-20 w-40 h-40 bg-purple-400 rounded-full opacity-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-16 -right-16 w-32 h-32 bg-pink-400 rounded-full opacity-10"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Floating particles */}
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 20}%`,
                    right: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <motion.div
                    className="p-5 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg relative"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <FaBullseye size={28} />
                    {/* Icon shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 rounded-2xl"
                      animate={{ 
                        opacity: hoveredCard === "mission" ? [0, 0.3, 0] : 0,
                        x: hoveredCard === "mission" ? [-100, 100] : 0,
                      }}
                      transition={{ 
                        duration: 0.8,
                        times: [0, 0.5, 1]
                      }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-200"
                    animate={{ 
                      color: hoveredCard === "mission" ? "#7c3aed" : "#ffffff" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Our Mission
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-200 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  To provide cost-effective, high-quality, and timely solutions while
                  building lasting relationships with our clients through trust,
                  innovation, and continuous improvement.
                </motion.p>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-4 left-4 text-purple-300"
                  animate={{ rotate: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <FaRocket size={18} />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 right-4 text-pink-300"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <FaHeart size={16} />
                </motion.div>
              </div>
              
              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  boxShadow: hoveredCard === "mission" 
                    ? "0 0 25px rgba(124, 58, 237, 0.3)" 
                    : "0 0 0px rgba(124, 58, 237, 0)",
                  borderColor: hoveredCard === "mission" 
                    ? "rgba(124, 58, 237, 0.2)" 
                    : "transparent"
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