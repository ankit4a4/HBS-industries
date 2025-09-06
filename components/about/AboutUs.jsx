import { FaChartLine, FaShieldAlt, FaMoneyBillAlt, FaAward } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.2 });
    sectionRef.current && observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const stats = [
    { end: 50, label: "Clients", delay: 500 },
    { end: 1000, label: "Products Delivered", delay: 600 },
    { end: 12, label: "States", delay: 700 },
    { end: "2019", label: "Established", delay: 800, noCount: true }
  ];

  const features = [
    { icon: <FaChartLine className="text-blue-600 text-2xl" />, title: "Higher Productivity", description: "Our equipment enables faster setup and mobility, increasing job site efficiency." },
    { icon: <FaShieldAlt className="text-blue-600 text-2xl" />, title: "Better Safety", description: "Certified equipment with safety features that exceed industry standards." },
    { icon: <FaMoneyBillAlt className="text-blue-600 text-2xl" />, title: "Lower Cost", description: "Durable designs that last longer and require less maintenance over time." },
    { icon: <FaAward className="text-blue-600 text-2xl" />, title: "Premium Quality", description: "Manufactured with aerospace-grade aluminum for superior strength and lightweight properties." }
  ];

  return (
    <section ref={sectionRef} className="py-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <div className={`w-20 h-1 bg-blue-600 mx-auto transition-transform duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <h3 className={`text-2xl font-semibold text-gray-800 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Our Story
            </h3>
            <p className={`text-gray-600 mb-6 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Founded in 2019, we started as a small supplier with a vision to revolutionize the construction equipment industry. 
              Through dedication to quality and customer satisfaction, we've grown into a leading provider of aluminum scaffolds and ladders.
            </p>
            <p className={`text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Today, we serve clients across multiple states, providing world-class equipment that meets the highest safety standards 
              while helping businesses improve efficiency and reduce costs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className={`text-center p-4 bg-white rounded-xl shadow-lg transition-all duration-1000 delay-${s.delay} ${isVisible ? 'opacity-100 translate-y-0 shadow-blue-100/30' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-3xl font-bold text-blue-600">
                    {s.noCount ? s.end : <Counter isVisible={isVisible} end={s.end} duration={2000} />}+
                  </div>
                  <div className="text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div 
                key={i} 
                className={`relative group overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-${500 + i * 100}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-blue-100 transform group-hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-blue-100 p-4 rounded-full mb-4 w-16 h-16 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <div className="relative z-10 flex items-center justify-center">{f.icon}</div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-center text-gray-800 group-hover:text-blue-700 transition-colors duration-500">{f.title}</h4>
                  <p className="text-gray-600 text-sm text-center group-hover:text-gray-800 transition-colors duration-500">{f.description}</p>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-700 transform group-hover:scale-150"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Counter */
const Counter = ({ isVisible, end, duration }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isVisible) {
      let start = 0, increment = end / (duration / 20);
      const timer = setInterval(() => {
        start += increment;
        start >= end ? (setCount(end), clearInterval(timer)) : setCount(Math.floor(start));
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);
  return <span>{count}</span>;
};
