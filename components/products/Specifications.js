'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Specifications({ specifications }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Technical Specifications
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid gap-6">
              {Object.entries(specifications).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.8)' }}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg hover:bg-white/50 transition-all"
                >
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="text-lg font-semibold text-gray-900 mb-2 md:mb-0"
                  >
                    {key}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="text-gray-700 md:text-right"
                  >
                    {value}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}