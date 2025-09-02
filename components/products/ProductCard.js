'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center pb-6"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white text-center"
              >
                <product.icon className="w-12 h-12 mx-auto mb-2" />
                <span className="text-lg font-semibold">View Details</span>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="p-6">
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ x: 5 }}
            >
              <product.icon className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                {product.title}
              </h3>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              className="text-gray-600 leading-relaxed mb-4"
            >
              {product.description}
            </motion.p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-2 h-2 bg-blue-600 rounded-full mr-2"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}