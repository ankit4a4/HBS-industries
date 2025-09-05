import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaCheck } from "react-icons/fa";
import img from "@/public/images/home/aboutUs.jpg";

const AboutUs = () => {
  return (
    <section className="w-full py-8 md:py-24 px-4 md:px-8  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-blue-100 text-[#669bcc] rounded-full text-sm font-medium mb-4">
            OUR STORY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            About HBS Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting excellence in every product since 2019
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={img.src}
                alt="About HBS Industries"
                className="w-full h-[400px] md:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Overlay badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <div className="w-3 h-3 bg-[#669bcc] rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-4 border-blue-200 rounded-2xl opacity-50"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Building <span className="text-[#669bcc] relative">Excellence
                  <span className="absolute -z-10 -inset-2 bg-blue-100 rounded-md transform -skew-y-2"></span>
                </span> Since 2019
              </h3>
              
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2019, HBS Industries started with a vision to provide
                  top-quality products and outstanding client relationships. Our
                  journey began with a small team and big ambitions, and within a
                  year, we grew rapidly thanks to our dedication and values.
                </p>
                <p>
                  Today, we continue to deliver excellence through our innovative
                  approach, quality assurance, and customer-first philosophy. Our
                  team of experts works tirelessly to ensure your satisfaction.
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#669bcc] relative">
              <div className="absolute top-4 right-4 text-[#669bcc] opacity-10 text-6xl">"</div>
              <p className="text-gray-700 italic text-lg relative z-10">
                "We don't settle for 'OK' — we strive to exceed expectations and
                build lasting partnerships."
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { text: "Quality Assurance", icon: <FaCheck className="text-[#669bcc]" /> },
                { text: "Innovation Driven", icon: <FaCheck className="text-[#669bcc]" /> },
                { text: "Customer First", icon: <FaCheck className="text-[#669bcc]" /> },
                { text: "Expert Team", icon: <FaCheck className="text-[#669bcc]" /> },
              ].map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>         
          </div>
        </div>

        {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
  {[
    { number: "4+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "24/7", label: "Support" },
  ].map((stat, index) => (
    <div
      key={index}
      className="group relative text-center p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
    >
      {/* Accent Circle Background */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#669bcc]/10 group-hover:bg-[#669bcc]/20 blur-lg transition-all duration-300"></div>

      {/* Number */}
      <div className="relative text-4xl font-extrabold text-[#669bcc] mb-3 group-hover:scale-110 transition-transform duration-300">
        {stat.number}
      </div>

      {/* Label */}
      <div className="text-gray-700 font-medium">{stat.label}</div>

      {/* Animated Underline */}
      <div className="mt-3 h-1 w-0 bg-[#669bcc] mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AboutUs;