"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState({
    products: false,
    scaffolds: false,
    ladders: false,
  });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
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

      <nav
        className={`sticky top-0 z-50  transition-all border-b-[6px] border-[#659acc] duration-300 ${
          scrolled ? "shadow-md bg-white" : "bg-white"
        }`}
      >
        <div className="relative h-16 md:h-20 flex items-center">
          {/* Blue skewed backgrounds */}
          <div className="absolute -left-[7.5%] top-0 h-full w-[44%] bg-[#659acc] transform skew-x-[40deg] origin-top-left hidden md:block"></div>
          <div className="absolute clippathcss right-[0%] top-0 h-full w-[42%] bg-[#659acc] transform ] origin-top-right hidden md:block"></div>

          <div className="container mx-auto px-4 relative z-50">
            <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
              {/* Left Menu (Desktop) */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) =>
                  item.label === "Products" ? (
                    <div key="products" className="relative group z-50">
                      <Link
                        href={item.href}
                        className={`relative flex items-center gap-1 px-4 py-2 font-medium transition-all duration-200 ${
                          pathname === item.href
                            ? "text-white font-semibold"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown for desktop */}
                      <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                        <ul className="py-2 text-gray-700">
                          <li className="relative group/item">
                            <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Scaffolds ▸
                            </span>
                            <ul className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-lg rounded-md w-52 z-50">
                              <li>
                                <Link
                                  href="/products/single-width-mobile-scaffolding"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Single Width
                                </Link>
                              </li>
                              <li className="relative group/subitem">
                                <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                  Double Width ▸
                                </span>
                                <ul className="absolute left-full top-0 hidden group-hover/subitem:block bg-white shadow-lg rounded-md w-56 z-50">
                                  <li>
                                    <Link
                                      href="/products/double-height-mobile-scaffolding"
                                      className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                      Double Height
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/products/triple-height-mobile-scaffolding"
                                      className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                      Triple Height
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li className="relative group/item">
                            <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Ladders ▸
                            </span>
                            <ul className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-lg rounded-md w-48 z-50">
                              <li>
                                <Link
                                  href="/products/a-type-ladders"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  A Type
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/airport-ladders"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Airport
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link
                              href="/raceways"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Raceways
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
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
                  )
                )}
              </div>

              {/* Logo */}
              <div className="flex justify-center lg:justify-center">
                <Link href="/" className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="HBS Industries Logo"
                    className="h-10 w-auto md:h-12 object-contain"
                  />
                </Link>
              </div>

              {/* Right Side */}
              <div className="flex justify-end items-center">
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
              {navItems.map((item) =>
                item.label === "Products" ? (
                  <div key="products">
                    <button
                      onClick={() =>
                        setMobileOpen((prev) => ({
                          ...prev,
                          products: !prev.products,
                        }))
                      }
                      className="flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#659acc] hover:bg-gray-50 w-full"
                    >
                      Products
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileOpen.products ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileOpen.products && (
                      <div className="pl-6">
                        {/* Scaffolds */}
                        <button
                          onClick={() =>
                            setMobileOpen((prev) => ({
                              ...prev,
                              scaffolds: !prev.scaffolds,
                            }))
                          }
                          className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                          Scaffolds
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              mobileOpen.scaffolds ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {mobileOpen.scaffolds && (
                          <div className="pl-6">
                            <Link
                             onClick={() => setIsOpen(!isOpen)}
                              href="/products/single-width-mobile-scaffolding"
                              className="block px-4 py-2 hover:bg-gray-50"
                            >
                              Single Width
                            </Link>
                            <button
                              onClick={() =>
                                setMobileOpen((prev) => ({
                                  ...prev,
                                  doubleWidth: !prev.doubleWidth,
                                }))
                              }
                              className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-50"
                            >
                              Double Width
                              <ChevronRight
                                className={`w-4 h-4 transition-transform ${
                                  mobileOpen.doubleWidth ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {mobileOpen.doubleWidth && (
                              <div className="pl-6">
                                <Link
                                 onClick={() => setIsOpen(!isOpen)}
                                  href="/products/double-height-mobile-scaffolding"
                                  className="block px-4 py-2 hover:bg-gray-50"
                                >
                                  Double Height
                                </Link>
                                <Link
                                 onClick={() => setIsOpen(!isOpen)}
                                  href="/products/triple-height-mobile-scaffolding"
                                  className="block px-4 py-2 hover:bg-gray-50"
                                >
                                  Triple Height
                                </Link>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Ladders */}
                        <button
                          onClick={() =>
                            setMobileOpen((prev) => ({
                              ...prev,
                              ladders: !prev.ladders,
                            }))
                          }
                          className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                          Ladders
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              mobileOpen.ladders ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {mobileOpen.ladders && (
                          <div className="pl-6">
                            <Link
                             onClick={() => setIsOpen(!isOpen)}
                              href="/products/a-type-ladders"
                              className="block px-4 py-2 hover:bg-gray-50"
                            >
                              A Type
                            </Link>
                            <Link
                             onClick={() => setIsOpen(!isOpen)}
                              href="/products/airport-ladders"
                              className="block px-4 py-2 hover:bg-gray-50"
                            >
                              Airport
                            </Link>
                          </div>
                        )}

                        {/* Raceways */}
                        <Link
                         onClick={() => setIsOpen(!isOpen)}
                          href="/raceways"
                          className="block px-4 py-2 hover:bg-gray-50"
                        >
                          Raceways
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              )}
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
