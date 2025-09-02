'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Award, Truck, Users, Settings } from 'lucide-react';

const strengths = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All products meet international safety standards with rigorous testing protocols.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Premium Jindal aluminum ensures superior durability and corrosion resistance.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuous research and development for cutting-edge industrial solutions.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'On-time delivery with careful packaging and logistics management.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated customer support and technical consultation services.',
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Tailored solutions to meet specific project requirements and specifications.',
  },
];

export default function CompanyStrengths() {
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Strengths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What sets us apart in the industrial manufacturing landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                scale: 1.03
              }}
              className="bg-white p-8 rounded-xl shadow-lg group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors"
              >
                <strength.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                {strength.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                className="text-gray-600 leading-relaxed"
              >
                {strength.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}