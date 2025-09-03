import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import img1 from "@/public/images/home/SCAFFOLDS.png";
import img2 from "@/public/images/home/ladderr.png";
import img3 from "@/public/images/home/RACEWAYS.png";

const products = [
  {
    name: "Scaffolds",
    image: img1.src,
    description:
      "Premium quality scaffolding solutions for construction safety and efficiency",
    features: ["Durable Material", "Easy Assembly"],
  },
  {
    name: "Ladders",
    image: img2.src,
    description:
      "Industrial-grade ladders designed for stability and maximum safety",
    features: ["Anti-Slip Steps", "Lightweight", ],
  },
  {
    name: "Raceways",
    image: img3.src,
    description:
      "Cable management solutions for organized and safe electrical installations",
    features: [ "Easy Installation", "Multiple Sizes"],
  },
];

const Products = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-6 md:py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
          Our Products
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full" />
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore our high-quality industrial products designed to meet your
          safety and efficiency needs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            className="relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -8 }}
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Quick buttons */}

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                Industrial
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3
                className={`text-xl font-bold mb-2 ${
                  hovered === i ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {p.name}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">{p.description}</p>
              <ul className="mb-5 space-y-1 text-sm text-gray-500">
                {p.features.map((f, k) => (
                  <li key={k} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                View Details <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
