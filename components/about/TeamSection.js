'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TeamSection() {
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to delivering excellence in every project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            50+ Expert Professionals
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our team consists of experienced engineers, skilled craftsmen, quality control specialists, 
            and dedicated customer service representatives. Together, we ensure that every product meets 
            the highest standards of quality, safety, and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Engineers', count: '15+' },
              { title: 'Production Staff', count: '25+' },
              { title: 'Quality Control', count: '10+' },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{role.count}</div>
                <div className="text-gray-700 font-medium">{role.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}