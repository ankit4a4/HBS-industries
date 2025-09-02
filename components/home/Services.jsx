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
        backgroundAttachment: "scroll", // changed from fixed for performance
      }}
    >
      {/* Static gradient overlay for smooth performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/80 to-purple-900/70" />

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 200 },
      }}
      style={{ willChange: "transform" }}
    >
      {/* Icon */}
      <div className="relative mb-6 bg-white/20 p-4 rounded-xl inline-flex z-10">
        {service.icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-200 mb-4">{service.desc}</p>

      {/* Read More link */}
      <a
        href="#"
        className="text-blue-300 font-medium inline-flex items-center gap-2 mt-auto transition-colors duration-300 hover:text-white"
      >
        Read More →
      </a>
    </motion.div>
  );
};

export default Services;
