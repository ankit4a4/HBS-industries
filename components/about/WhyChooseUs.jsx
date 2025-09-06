import { FaHardHat, FaShieldAlt, FaClock, FaTools, FaSmile } from 'react-icons/fa';
import { useEffect } from 'react';

export default function WhyChooseUs() {
  useEffect(() => {
    // Initialize AOS when component mounts
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        once: true, // Animation will happen only once - when element first enters viewport
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make our aluminum scaffolds and ladders the preferred choice for professionals
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sturdy Construction */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaHardHat className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sturdy Construction</h3>
            </div>
            <p className="text-gray-600">
              Our products are engineered with reinforced joints and high-grade aluminum to withstand the toughest job site conditions.
            </p>
          </div>

          {/* Rustproof & Durable */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Rustproof & Durable</h3>
            </div>
            <p className="text-gray-600">
              Aerospace-grade aluminum construction ensures complete resistance to rust and corrosion, even in harsh environments.
            </p>
          </div>

          {/* Long Service Life */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Long Service Life</h3>
            </div>
            <p className="text-gray-600">
              Designed to last 3x longer than conventional equipment, providing exceptional value over time.
            </p>
          </div>

          {/* Low Maintenance */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaTools className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Low Maintenance</h3>
            </div>
            <p className="text-gray-600">
              No painting, rust treatment, or special storage needed. Simply use and store with minimal upkeep.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up" 
            data-aos-delay="500"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaSmile className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
            </div>
            <p className="text-gray-600">
              Backed by 98% customer satisfaction rate and comprehensive after-sales support.
            </p>
          </div>

          {/* Additional Benefit - Lightweight */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Lightweight Design</h3>
            </div>
            <p className="text-gray-600">
              Our aluminum equipment is 40% lighter than steel alternatives, making transportation and setup effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}