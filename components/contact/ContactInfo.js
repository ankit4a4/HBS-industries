'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 9876543210', '+91 9876543211'],
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@hbsindustries.com', 'sales@hbsindustries.com'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Industrial Area, Sector 45', 'Gurgaon, Haryana 122003'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export default function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Get in Touch
      </motion.h3>

      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.title}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          whileHover={{ 
            x: 10, 
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
          }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ duration: 0.3 }}
              className={`w-12 h-12 ${detail.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
            >
              <detail.icon className={`w-6 h-6 ${detail.color}`} />
            </motion.div>

            <div className="flex-1">
              <motion.h4
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                className="text-xl font-semibold text-gray-900 mb-2"
              >
                {detail.title}
              </motion.h4>
              <div className="space-y-1">
                {detail.details.map((info, infoIndex) => (
                  <motion.p
                    key={infoIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.4 + infoIndex * 0.1 }}
                    className="text-gray-600"
                  >
                    {info}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl"
      >
        <motion.h4
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          Need Custom Solutions?
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-700 leading-relaxed mb-4"
        >
          Our engineering team can design custom products to meet your specific requirements. 
          Contact us for a consultation and detailed quote.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Request Quote
        </motion.button>
      </motion.div>
    </motion.div>
  );
}