"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#", label: "About" },
  { href: "/#", label: "Services" },
  { href: "/#", label: "Products" },
  { href: "/#", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex w-full bg-black text-white text-sm py-2 px-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <span>We believe in Quality</span>
          <a href="mailto:sales@hbsindustries.com" className="hover:underline">
            sales@hbsindustries.com
          </a>
          <a href="tel:+916366832224" className="flex items-center gap-1 hover:underline">
            <PhoneCall className="w-4 h-4" /> +91 6366 832224
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" className="hover:text-gray-200">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-gray-200">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-gray-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://wa.me/916366832224" target="_blank" className="hover:text-gray-200">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 left-0 right-0 z-50 transition-shadow"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-300 ${
            scrolled ? "shadow-lg backdrop-blur-md" : ""
          }`}
        >
          <div className="absolute inset-0 bg-white border-blue-600 border-b-[5px]" />
          <div className="absolute inset-0 bg-blue-600 clip-diagonal" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="HBS Industries Logo" className="h-10 w-auto object-contain" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-lg font-medium transition-colors ${
                    pathname === item.href ? "text-white" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-white transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
                style={{ willChange: "opacity" }}
              >
                <div className="py-4 flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Diagonal split style */}
        <style jsx>{`
          .clip-diagonal {
            clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
          }
        `}</style>
      </motion.nav>
    </>
  );
}
