import React, { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown } from "lucide-react";

const locations = [
  { name: "BENGALURU RURAL", type: "warehouse", color: "from-blue-400 to-blue-600" },
  { name: "HYDERABAD", type: "warehouse", color: "from-blue-400 to-blue-600" },
  { name: "CHENNAI", type: "warehouse", color: "from-blue-400 to-blue-600" },
  { name: "MUMBAI", type: "planning", color: "from-blue-400 to-blue-600" },
  { name: "PUNE", type: "planning", color: "from-blue-400 to-blue-600" },
  { name: "BENGALURU", type: "plant", color: "from-pink-400 to-pink-600" },
];

const StrongPresence = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full  flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-7 md:py-20 text-center text-white">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 relative inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease-out",
          }}
        >
          Strong Presence
          <span className="block w-20 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {locations.map((loc, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-pink-500/50`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(50px)",
                transitionDelay: isVisible ? `${i * 150}ms` : "0ms",
              }}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${loc.color} mb-4 mx-auto shadow-md`}
              >
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide">{loc.name}</h3>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-16 px-6 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex flex-wrap justify-center gap-8 text-sm font-medium"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "800ms",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></span>
            Warehouse & Distribution Centers
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-600"></span>
            Current Manufacturing Plant
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></span>
            In Planning
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </div>
    </section>
  );
};

export default StrongPresence;
