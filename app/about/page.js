"use client";

import { useInView } from "react-intersection-observer";
import HeroSection from "@/components/about/HeroSection";
import AboutUs from "@/components/about/AboutUs";
import MissionSection from "@/components/about/MissionSection";
import Product from "@/components/home/Product";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <HeroSection />
      <AboutUs />
      <MissionSection />
      <Product />
      <WhyChooseUs />
      <TestimonialsSlider />
    </>
  );
}
