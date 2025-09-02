'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'company', label: 'Company Name', type: 'text', required: false },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Send us a Message
      </motion.h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {inputFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="relative"
          >
            <motion.input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
              required={field.required}
              className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all peer"
              placeholder=" "
            />
            <motion.label
              animate={{
                y: formData[field.name] || focusedField === field.name ? -20 : 0,
                scale: formData[field.name] || focusedField === field.name ? 0.85 : 1,
                color: focusedField === field.name ? '#2563eb' : '#6b7280',
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 top-4 text-gray-500 pointer-events-none origin-left"
            >
              {field.label}
              {field.required && (
                <motion.span
                  animate={{ opacity: focusedField === field.name ? 1 : 0.7 }}
                  className="text-red-500 ml-1"
                >
                  *
                </motion.span>
              )}
            </motion.label>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows={5}
            required
            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all resize-none"
            placeholder=" "
          />
          <motion.label
            animate={{
              y: formData.message || focusedField === 'message' ? -20 : 8,
              scale: formData.message || focusedField === 'message' ? 0.85 : 1,
              color: focusedField === 'message' ? '#2563eb' : '#6b7280',
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 top-4 text-gray-500 pointer-events-none origin-left"
          >
            Your Message *
          </motion.label>
        </motion.div>

        <motion.button
          type="submit"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </form>
    </motion.div>
  );
}