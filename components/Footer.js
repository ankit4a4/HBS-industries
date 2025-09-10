"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const services = [
  {
    id: "easy",
    title: "Easy Rental",
  },
  {
    id: "Cost-Saving",
    title: "Cost-Saving Purchase",
  },
  {
    id: "On-Site",
    title: "On-Site Product Trainings",
  },
  {
    id: "Maintenance",
    title: "Maintenance Check",
  },
  {
    id: "Timely",
    title: "Timely Deliveries",
  },
  {
    id: "Replacements",
    title: "Replacements or Repairs",
  },
];

const product = [
  {
    name: "Scaffolds",
    href: "/products/single-width-mobile-scaffolding",
  },
  {
    name: "Ladders",
    href: "/products/a-type-ladders",
  },
  {
    name: "Cable Trays",
    href: "/trays#solid-cable-trays",
  },
  {
    name: "Raceways",
    href: "/raceways",
  },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const router = useRouter();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="flex  flex-col items-center justify-center  text-center  mb-12">
          <img src="/logo-two.png" alt="HBS Industries" className="h-14 mb-4" />
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Leading manufacturer of premium industrial solutions with Jindal
            aluminum extrusions. Committed to safety, durability, and
            excellence.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Service", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {product.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item?.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-xl font-semibold mb-2">Premium Services</h3>

            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li
                  onClick={() => router.push(`/services#${service.id}`)}
                  className="text-gray-300 cursor-pointer hover:text-blue-400 transition-colors text-sm"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@hbsindustries.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Industrial Area, Sector 45
                  <br />
                  Gurgaon, Haryana 122003
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="border-t border-gray-800 py-8"
      >
        <div className="container mx-auto px-4  ">
          <p className="text-gray-400 text-center  md:text-left">
            © 2025 HBS Industries. All rights reserved.
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
