'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Users, Building } from 'lucide-react';

const timelineEvents = [
  {
    year: '1999',
    title: 'Company Founded',
    description: 'HBS Industries established with a vision to provide premium industrial solutions.',
    icon: Building,
  },
  {
    year: '2005',
    title: 'Jindal Partnership',
    description: 'Strategic partnership with Jindal for premium aluminum extrusions.',
    icon: Award,
  },
  {
    year: '2012',
    title: 'Team Expansion',
    description: 'Grew to 50+ expert professionals and expanded manufacturing capabilities.',
    icon: Users,
  },
  {
    year: '2025',
    title: 'Industry Leader',
    description: 'Recognized as the leading manufacturer in industrial scaffolding and cable management.',
    icon: Calendar,
  },
];

export default function AnimatedTimeline() {
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over two decades of innovation, growth, and commitment to excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 hidden md:block"
          />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                  >
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 * index + 0.3 }}
                      className="text-2xl font-bold text-blue-600 mb-2"
                    >
                      {event.year}
                    </motion.h3>
                    <motion.h4
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 * index + 0.4 }}
                      className="text-xl font-semibold text-gray-900 mb-3"
                    >
                      {event.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 * index + 0.5 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {event.description}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index + 0.6 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                >
                  <event.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Spacer for mobile */}
                <div className="w-full md:w-5/12 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}