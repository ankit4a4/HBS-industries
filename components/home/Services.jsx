import React, { useState, useRef, useEffect } from "react";
import {
  FaTools,
  FaTruck,
  FaSyncAlt,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaArrowRight,
  FaPlay,
  FaPause
} from "react-icons/fa";
import bgImg from "@/public/images/home/banner-main.jpg"; // Background image path
import { useRouter } from "next/navigation";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const router = useRouter()

  const services = [
    {
      id: "Easy",
      icon: <FaClipboardCheck className="text-2xl" />,
      title: "Effortless Equipment Rental",
      desc: "Rent premium machinery without hefty upfront costs. Flexible plans, maintenance included, and instant access to the tools you need.",
      features: ["No upfront investment", "Flexible rental plans", "Maintenance covered"],
      stats: { value: "40%", label: "Average Cost Savings" }
    },
    {
      id: "Cost-Saving",
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Direct Manufacturer Deals",
      desc: "Cut out the middlemen and source products directly. Enjoy bulk discounts, price match guarantees, and the best rates in the market.",
      features: ["Factory-direct pricing", "Exclusive bulk offers", "Price match promise"],
      stats: { value: "50+", label: "Trusted Manufacturers" }
    },
    {
      id: "On-Site",
      icon: <FaChalkboardTeacher className="text-2xl" />,
      title: "Expert On-Site Trainings",
      desc: "Ensure your team maximizes the potential of every tool with our hands-on, certified training programs customized to your needs.",
      features: ["Certified trainers", "Tailored sessions", "Ongoing support"],
      stats: { value: "98%", label: "Client Satisfaction" }
    },
    {
      id: "Maintenance",
      icon: <FaTools className="text-2xl" />,
      title: "Comprehensive Maintenance",
      desc: "Extend equipment lifespan and reduce downtime with preventive checks, remote diagnostics, and 24/7 support.",
      features: ["Preventive maintenance", "Remote monitoring", "24/7 expert support"],
      stats: { value: "99.5%", label: "Uptime Guarantee" }
    },
    {
      id: "Timely",
      icon: <FaTruck className="text-2xl" />,
      title: "Rapid Delivery Solutions",
      desc: "Fast, reliable, and transparent logistics ensure your equipment arrives exactly when you need it.",
      features: ["Same-day shipping", "Real-time tracking", "Global coverage"],
      stats: { value: "2H", label: "Average Response Time" }
    },
    {
      id: "Replacements",
      icon: <FaSyncAlt className="text-2xl" />,
      title: "Instant Replacements & Repairs",
      desc: "Minimize downtime with our quick replacement and repair services, backed by a dedicated support team.",
      features: ["Next-day replacements", "On-site repairs", "Loaner equipment"],
      stats: { value: "24/7", label: "Support Availability" }
    },
  ];

  // Auto-rotate services
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveService(prev => (prev + 1) % services.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, services.length]);

  return (
    <section
      className="relative w-full py-16 px-4 md:px-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src}) `, backgroundAttachment: "fixed" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
            PREMIUM SERVICES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exceptional Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore services crafted to enhance efficiency, cut costs, and empower your operations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Services Navigation with Glass Effect */}
          <div className="lg:w-2/5">
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-white">Our Services</h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors"
                  aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveService(index);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-left p-5 rounded-2xl text-white backdrop-blur-lg bg-white/10 transition-all duration-500  ${activeService === index
                        ? "bg-white/20 border-l-4 border-cyan-400 shadow-lg"
                        : "hover:bg-white/20"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${activeService === index ? "bg-cyan-500" : "bg-gray-700"
                        }`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold ${activeService === index ? "text-white" : "text-gray-300"
                          }`}>
                          {service.title}
                        </h4>
                        <p className={`text-sm mt-1 ${activeService === index ? "text-cyan-200" : "text-gray-400"
                          }`}>
                          {service.features[0]}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Service Display */}
          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-cyan-500  rounded-xl">
                    {services[activeService].icon}
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">
                      {services[activeService].stats.value}
                    </div>
                    <div className="text-sm text-cyan-400 uppercase tracking-wide">
                      {services[activeService].stats.label}
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {services[activeService].title}
                </h3>

                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  {services[activeService].desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>















































                <div className="flex flex-wrap gap-4">
                  <button 
                  onClick={() =>  router.push(`/services#${services[activeService].id}`)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                    Learn More <FaArrowRight />
                  </button>
                 
                </div>
              </div>
            </div>

            {/* Service progression indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveService(index);
                    setIsPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${activeService === index ? "bg-cyan-400 w-8" : "bg-gray-700"
                    }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
