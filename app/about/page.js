'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedTimeline from '@/components/about/AnimatedTimeline';
import CompanyStrengths from '@/components/about/CompanyStrengths';
import TeamSection from '@/components/about/TeamSection';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="pt-20">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              About HBS Industries
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Leading the industry with premium aluminum solutions and unwavering commitment to safety and durability.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <AnimatedTimeline />
      <CompanyStrengths />
      <TeamSection />
    </main>
  );
}