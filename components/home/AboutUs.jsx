import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUsers,
  FaCheck,
  FaQuoteLeft,
  FaCrown,
  FaRocket,
  FaHeart,
  FaAward
} from "react-icons/fa";
import img from "@/public/images/home/aboutUs.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section className="w-full md:py-20 py-8 px-6 md:px-16 lg:px-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-4 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 relative inline-block"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ABOUT US
            <motion.span 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute -top-4 left-1/4 text-blue-200 opacity-70"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FaCrown size={24} />
          </motion.div>
          <motion.div 
            className="absolute top-2 right-1/4 text-blue-200 opacity-70"
            animate={{ y: [0, 10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaAward size={20} />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", damping: 15 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-6 hidden md:flex -left-6 w-24 h-24 border-4 border-blue-200 rounded-lg opacity-50"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 hidden md:flex -right-6 w-20 h-20 border-4 border-blue-200 rounded-full opacity-50"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={img.src}
                alt="About Us"
                className="w-full h-[300px] rounded-2xl md:h-[600px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"
                whileHover={{ opacity: 1 }}
              />
              
              {/* Floating particles overlay */}
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/30"
                  initial={{ 
                    opacity: 0,
                    scale: 0,
                    x: Math.random() * 100 - 50 + "%", 
                    y: Math.random() * 100 - 50 + "%" 
                  }}
                  whileInView={{ 
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  viewport={{ once: true }}
                />
              ))}
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="absolute -bottom-8 left-8 bg-white rounded-xl shadow-lg p-6 w-3/4 border border-gray-100"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-lg mr-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <FaUsers className="text-blue-600 text-3xl" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    200+
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Happy Clients
                  </motion.p>
                </div>
              </div>
              
              {/* Animated progress bar */}
              <motion.div 
                className="h-1 bg-blue-100 mt-3 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", damping: 15, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Building Excellence Since{" "}
              <motion.span 
                className="text-blue-600 relative"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                2019
                <motion.span 
                  className="absolute -inset-2 bg-blue-100 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </motion.span>
            </motion.h3>

            <motion.p 
              className="text-gray-600 leading-relaxed mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Founded in 2019, HBS Industries started with a vision to provide
              top-quality products and outstanding client relationships. Our
              journey began with a small team and big ambitions, and within a
              year, we grew rapidly thanks to our dedication and values.
            </motion.p>

            <motion.div
              className="bg-gray-100 p-6 rounded-xl mb-6 border-l-4 border-blue-600 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <FaQuoteLeft className="absolute -left-2 -top-2 text-blue-600 opacity-20 text-6xl" />
              <motion.p 
                className="text-gray-700 italic relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                "We don't settle for 'OK' — we strive to exceed expectations and
                build lasting partnerships."
              </motion.p>
              
              {/* Floating element inside quote */}
              <motion.div 
                className="absolute bottom-2 right-4 text-blue-600 opacity-30"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <FaHeart size={20} />
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-gray-600 leading-relaxed mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Today, we continue to deliver excellence through our innovative
              approach, quality assurance, and customer-first philosophy. Our
              team of experts works tirelessly to ensure your satisfaction.
            </motion.p>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-1 md:gap-6 mb-10"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { text: "Quality Assurance", icon: <FaCheck /> },
                { text: "Innovation", icon: <FaRocket /> },
                { text: "Customer First", icon: <FaHeart /> },
                { text: "Expert Team", icon: <FaUsers /> },
              ].map((feature, index) => (
                <motion.div
                  className="flex items-center mb-4"
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="bg-blue-100 p-2 rounded-lg mr-3"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        delay: index * 0.5
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-gray-700 font-medium mr-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                Follow us:
              </motion.span>
              <div className="flex gap-2 md:gap-5">
                {[
                  { icon: <FaWhatsapp className="text-lg" />, link: "#", color: "#25D366" },
                  { icon: <FaFacebookF className="text-lg" />, link: "#", color: "#1877F2" },
                  { icon: <FaInstagram className="text-lg" />, link: "#", color: "#E4405F" },
                  { icon: <FaLinkedinIn className="text-lg" />, link: "#", color: "#0A66C2" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:text-white transition-colors duration-300 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: item.color
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.icon}
                    <motion.span 
                      className="absolute inset-0 bg-white opacity-0 rounded-full"
                      whileHover={{ 
                        opacity: 0.2,
                        scale: 1.5
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;