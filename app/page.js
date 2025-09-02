"use client";

import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Product from "@/components/home/Product";
import VisionMission from "@/components/home/VisionMission";
import LogoMarquee from "@/components/home/LogoMarquee";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import StrongPresence from "@/components/home/StrongPresence";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Product />
      <VisionMission />
      <LogoMarquee />
      <TestimonialsSlider />
      <StrongPresence />
    </main>
  );
}
