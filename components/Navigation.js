"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
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

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full hidden md:flex flex-col bg-black text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-2 md:mb-0">
            <a
              href="tel:+916366832224"
              className="flex items-center gap-1 hover:text-blue-200 transition-colors"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span>+91 6366 832224</span>
            </a>
            <a
              href="mailto:sales@hbsindustries.com"
              className="flex items-center gap-1 hover:text-blue-200 transition-colors"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span>sales@hbsindustries.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-blue-200">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                className="p-1 hover:text-blue-200 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-1 hover:text-blue-200 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-1 hover:text-blue-200 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/916366832224"
                target="_blank"
                className="p-1 hover:text-blue-200 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all overflow-hidden border-b-[6px] border-[#659acc] duration-300 ${
          scrolled ? "shadow-md bg-white" : "bg-white"
        }`}
      >
        <div className="relative h-16 md:h-20 flex items-center">
          {/* Left Blue Box (hide on mobile) */}
          <div className="absolute -left-[7.5%] top-0 h-full w-[44%] bg-[#659acc] transform skew-x-[40deg] origin-top-left hidden md:block"></div>

          {/* Right Blue Box (hide on mobile) */}
          <div className="absolute right-[-6%] top-0 h-full w-[43%] bg-[#659acc] transform -skew-x-[40deg] origin-top-right hidden md:block"></div>

          <div className="container mx-auto px-4 relative">
            {/* ✅ Mobile: flex with logo left, toggle right */}
            {/* ✅ Desktop: grid layout */}
            <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
              {/* Left Menu (desktop only) */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "text-white font-semibold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Logo (center on desktop, left on mobile) */}
              <div className="flex justify-center lg:justify-center">
                <Link href="/" className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="HBS Industries Logo"
                    className="h-10 w-auto md:h-12 object-contain"
                  />
                </Link>
              </div>

              {/* Right side (desktop button + mobile toggle) */}
              <div className="flex justify-end items-center">
                {/* Desktop Button */}
                <div className="hidden md:flex items-center gap-4">
                  <button className="bg-white text-[#659acc] font-semibold px-5 py-2.5 rounded-md shadow-md hover:bg-blue-50 flex items-center gap-2 transition">
                    <Phone className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>

                {/* Mobile Toggle */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 overflow-hidden">
            <div className="py-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-lg font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[#659acc] bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-[#659acc] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3 mt-2 border-t border-gray-200">
                <button className="w-full bg-[#659acc] hover:bg-blue-800 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
