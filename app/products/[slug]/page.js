'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCarousel from '@/components/products/ProductCarousel';
import FeatureList from '@/components/products/FeatureList';
import Specifications from '@/components/products/Specifications';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const productData = {
  'solid-cable-tray': {
    title: 'Solid Cable Tray',
    description: 'Heavy-duty solid cable trays for maximum protection and support.',
    images: [
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
    ],
    features: [
      'Solid bottom construction for maximum cable protection',
      'High load-bearing capacity up to 150 kg/m',
      'Corrosion-resistant aluminum construction',
      'Easy installation with snap-fit connections',
      'Fire-resistant coating available',
      'Multiple width options: 100mm to 600mm',
    ],
    specifications: {
      'Material': 'Jindal Aluminum Extrusion',
      'Load Capacity': '150 kg/m',
      'Width Options': '100mm, 150mm, 200mm, 300mm, 450mm, 600mm',
      'Length': '3m standard (custom lengths available)',
      'Finish': 'Mill finish or powder coated',
      'Standards': 'IS 2062, IEC 61537',
    },
  },
  'perforated-tray': {
    title: 'Perforated Cable Tray',
    description: 'Ventilated cable trays with optimal airflow and easy access.',
    images: [
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
    ],
    features: [
      'Perforated design for excellent ventilation',
      'Easy cable identification and access',
      'Lightweight yet strong construction',
      'Reduced cable heating and improved lifespan',
      'Quick installation system',
      'Customizable perforation patterns',
    ],
    specifications: {
      'Material': 'Jindal Aluminum Extrusion',
      'Load Capacity': '120 kg/m',
      'Perforation': '12mm dia holes at 20mm centers',
      'Width Options': '100mm, 150mm, 200mm, 300mm, 450mm, 600mm',
      'Length': '3m standard',
      'Finish': 'Mill finish or powder coated',
    },
  },
  'wire-mesh': {
    title: 'Wire Mesh Cable Tray',
    description: 'Open mesh design for maximum visibility and airflow.',
    images: [
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
    ],
    features: [
      'Open mesh for maximum cable visibility',
      'Superior ventilation and heat dissipation',
      'Lightweight and easy to handle',
      'Cost-effective solution',
      'Quick splice connections',
      'Flexible routing capabilities',
    ],
    specifications: {
      'Material': 'Galvanized Steel Wire',
      'Wire Diameter': '4mm',
      'Mesh Size': '50mm x 100mm',
      'Width Options': '100mm, 200mm, 300mm, 400mm, 500mm, 600mm',
      'Length': '3m standard',
      'Finish': 'Hot-dip galvanized',
    },
  },
  'a-type-ladder': {
    title: 'A-Type Cable Ladder',
    description: 'Heavy-duty cable ladders for high-capacity installations.',
    images: [
      'https://images.pexels.com/photos/5691620/pexels-photo-5691620.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    ],
    features: [
      'High strength-to-weight ratio',
      'Excellent for heavy cable runs',
      'Long span capabilities',
      'Minimal maintenance required',
      'Quick assembly system',
      'Suitable for outdoor installations',
    ],
    specifications: {
      'Material': 'Jindal Aluminum Extrusion',
      'Load Capacity': '200 kg/m',
      'Rung Spacing': '300mm centers',
      'Width Options': '200mm, 300mm, 450mm, 600mm, 750mm, 900mm',
      'Length': '3m or 6m',
      'Finish': 'Mill finish or powder coated',
    },
  },
};

export default function ProductDetail({ params }) {
  const product = productData[params.slug];
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <motion.section
        ref={titleRef}
        initial={{ opacity: 0 }}
        animate={titleInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/products" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {product.description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <ProductCarousel images={product.images} title={product.title} />
      <FeatureList features={product.features} />
      <Specifications specifications={product.specifications} />
    </main>
  );
}