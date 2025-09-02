'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Visit Our Facility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Gurgaon's industrial area, our state-of-the-art facility is equipped with modern manufacturing capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Google Maps Embed Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center relative"
            >
              {/* Placeholder for Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.834623814216!2d77.0266!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229f71f82ee5%3A0x5a8a71e5a8d7b2e4!2sSector%2045%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HBS Industries Location"
              />

              {/* Animated Marker */}
              <motion.div
                initial={{ scale: 0, y: -50 }}
                animate={inView ? { scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 pointer-events-none"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                >
                  <MapPin className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Location Info Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">HBS Industries</h4>
                  <p className="text-sm text-gray-600">Industrial Area, Sector 45, Gurgaon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}