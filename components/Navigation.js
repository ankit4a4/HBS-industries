"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-2 md:mb-0">
            <a href="tel:+916366832224" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone className="w-3 h-3 md:w-4 md:h-4" /> 
              <span>+91 6366 832224</span>
            </a>
            <a href="mailto:sales@hbsindustries.com" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail className="w-3 h-3 md:w-4 md:h-4" /> 
              <span>sales@hbsindustries.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-blue-200">Follow us:</span>
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" className="p-1 hover:text-blue-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" className="p-1 hover:text-blue-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-1 hover:text-blue-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.me/916366832224" target="_blank" className="p-1 hover:text-blue-200 transition-colors">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white" : "bg-white/95 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="HBS Industries Logo" 
                  className="h-10 w-auto md:h-12 object-contain mr-2" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                    pathname === item.href 
                      ? "text-blue-700 font-bold" 
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {pathname === item.href ? (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 rounded-t-full transform translate-y-1 scale-105 shadow-md" />
                  ) : (
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 rounded-t-full transition-all duration-300 group-hover:w-full" />
                  )}
                  
                  {/* 3D effect for active item */}
                  {pathname === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white rounded-lg -z-10 transform skew-y-1 scale-105 shadow-lg border border-blue-100" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button className="bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 transform hover:-translate-y-0.5">
                <Phone className="w-4 h-4" />
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <div className="relative w-6 h-6">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -rotate-45" />
                </div>
              ) : (
                <div className="relative w-6 h-6">
                  <div className="absolute top-1/4 left-0 w-full h-0.5 bg-current" />
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current" />
                  <div className="absolute top-3/4 left-0 w-full h-0.5 bg-current" />
                </div>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 overflow-hidden">
              <div className="py-4 flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-lg font-medium transition-all ${
                      pathname === item.href
                        ? "text-blue-700 bg-blue-50 border-l-4 border-blue-700 font-bold transform scale-105"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="ml-2 text-blue-500">●</span>
                    )}
                  </Link>
                ))}
                <div className="px-4 py-3 mt-2 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-b from-blue-600 to-blue-800 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md">
                    <Phone className="w-5 h-5" />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}