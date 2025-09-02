import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaTruck,
  FaSyncAlt,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaMoneyBillWave,
} from "react-icons/fa";

const BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MNgwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const services = [
  {
    icon: <FaClipboardCheck className="text-3xl text-blue-600" />,
    title: "Easy Rental",
    desc: "Renting with us will save your initial purchase investment",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
    title: "Cost Saving Purchase",
    desc: "By sourcing directly from manufacturer, we are able to offer",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
    title: "On-Site Product Trainings",
    desc: "We believe in building trust by providing clients the most",
  },
  {
    icon: <FaTools className="text-3xl text-blue-600" />,
    title: "Maintenance Check",
    desc: "Standard maintenance plays a crucial part in making your",
  },
  {
    icon: <FaTruck className="text-3xl text-blue-600" />,
    title: "Timely Deliveries",
    desc: "We understand your deadlines are very substantial, that is why we make",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-blue-600" />,
    title: "Replacements or Repairs",
    desc: "We offer speedy resolutions to client issues to help them",
  },
];

const Services = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${BG_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/80 to-purple-900/70">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 40% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                              radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)`,
            backgroundSize: "50% 50%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white relative inline-block"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
            <motion.span
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-200 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            We provide comprehensive solutions tailored to your specific needs
            with the highest quality standards.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 40, rotateY: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -15,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
    >
      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating particles effect */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/30"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
            x: [
              Math.random() * 100 - 50 + "%",
              Math.random() * 100 - 50 + "%",
              Math.random() * 100 - 50 + "%",
            ],
            y: [
              Math.random() * 100 - 50 + "%",
              Math.random() * 100 - 50 + "%",
              Math.random() * 100 - 50 + "%",
            ],
          }}
          transition={{
            duration: 5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />
      ))}

      {/* Icon container */}
      <motion.div
        className="relative mb-6 bg-white/20 p-4 rounded-xl inline-flex group-hover:bg-gradient-to-r group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-colors duration-300 z-10"
        whileHover={{
          rotate: [0, -10, 10, 0],
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        animate={{
          y: isHovered ? [0, -5, 0] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.5,
          }}
        >
          {service.icon}
        </motion.div>

        {/* Icon glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-blue-500/20"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? [0, 0.5, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </motion.div>

      <motion.h3
        className="text-xl font-bold text-white mb-3 z-10 relative"
        animate={{
          color: isHovered ? "#93c5fd" : "#ffffff",
        }}
      >
        {service.title}
      </motion.h3>

      <motion.p
        className="text-gray-200 mb-4 z-10 relative"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
      >
        {service.desc}
      </motion.p>

      <motion.a
        href="#"
        className="text-blue-300 font-medium inline-flex items-center gap-2 mt-auto group-hover:text-white transition-colors duration-300 z-10 relative"
        whileHover={{ x: 5 }}
      >
        Read More
        <motion.span
          animate={{
            x: isHovered ? 8 : 0,
            opacity: isHovered ? [0, 1, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          →
        </motion.span>
      </motion.a>

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          boxShadow: isHovered
            ? "0 0 25px rgba(59, 130, 246, 0.6), inset 0 0 15px rgba(59, 130, 246, 0.3)"
            : "0 0 0px rgba(59, 130, 246, 0)",
          borderColor: isHovered ? "rgba(147, 197, 253, 0.5)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 scale-150 z-0"
        animate={{
          left: isHovered ? ["100%", "-100%"] : "100%",
          opacity: isHovered ? [0, 0.5, 0] : 0,
        }}
        transition={{
          duration: 0.8,
          times: [0, 0.5, 1],
        }}
      />
    </motion.div>
  );
};

export default Services;
