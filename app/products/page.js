'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from '@/components/products/ProductCard';
import { Wrench, Shield, Zap, Truck } from 'lucide-react';

const products = [
  {
    id: 'scaffolds',
    title: 'Industrial Scaffolds',
    description: 'Premium aluminum scaffolds built for maximum safety and durability.',
    icon: Wrench,
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
    features: ['High Load Capacity', 'Corrosion Resistant', 'Easy Assembly'],
  },
  {
    id: 'ladders',
    title: 'Safety Ladders',
    description: 'Professional-grade ladders with advanced safety features.',
    icon: Shield,
    image: 'https://images.pexels.com/photos/5691620/pexels-photo-5691620.jpeg',
    features: ['Anti-Slip Steps', 'Weather Resistant', 'Certified Safety'],
  },
  {
    id: 'cable-trays',
    title: 'Cable Trays',
    description: 'Efficient cable management solutions for industrial applications.',
    icon: Zap,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
    features: ['Multiple Configurations', 'Easy Installation', 'Fire Resistant'],
  },
  {
    id: 'raceways',
    title: 'Cable Raceways',
    description: 'Organized cable routing systems for commercial and industrial use.',
    icon: Truck,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    features: ['Flexible Design', 'High Capacity', 'Professional Finish'],
  },
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="pt-20">
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover our comprehensive range of industrial solutions designed for excellence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}