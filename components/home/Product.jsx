import React from "react";
import img1 from "@/public/images/home/SCAFFOLDS.png";
import img2 from "@/public/images/home/ladderr.png";
import img3 from "@/public/images/home/RACEWAYS.png";
import { useRouter } from "next/navigation";

const products = [
  {
    name: "Scaffolds",
    image: img1.src,
    description: "Premium quality scaffolding solutions for construction safety and efficiency",
    isNew: false,
    href: "/products/single-width-mobile-scaffolding"
  },
  {
    name: "Ladders",
    image: img2.src,
    description: "Industrial-grade ladders designed for stability and maximum safety",
    isNew: false,
    href: "/products/a-type-ladders"
  },
  {
    name: "Raceways",
    image: img3.src,
    description: "Cable management solutions for organized and safe electrical installations",
    isNew: false,
    href: "/raceways"
  },
  {
    name: " Stainless Steel Tactile Stud",
    image: img3.src,
    description: "Stainless Steel Tactile Studs provide anti-skid surfaces for safety, especially for blind people.",
    isNew: false,
    href: "/products/stainless-steel-tactile-stud-304"
  },
];

const Products = () => {
  const router = useRouter()
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
          Our Products
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full" />
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore our high-quality industrial products designed to meet your
          safety and efficiency needs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="relative bg-white shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden 
                       rounded-b-2xl rounded-t-[50%] group"
          >
            {/* NEW Tag */}
            {p.isNew && (
              <span className="absolute top-5 left-1/2 -translate-x-1/2 bg-white shadow px-4 py-1 text-xs font-medium rounded-full">
                NEW
              </span>
            )}

            {/* Image Section */}
            <div className="relative w-full h-72 flex items-center justify-center">
              <img
                onClick={() => router.push(`${p.href}`)}
                src={p.image}
                alt={p.name}
                className="max-h-60 object-contain drop-shadow-lg cursor-pointer"
              />
            </div>

            {/* Content */}
            <div className="px-6 pb-8 text-center relative">
              <h3
                onClick={() => router.push(`${p.href}`)}
                className="text-xl font-bold text-gray-800 cursor-pointer">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.description}</p>

              {/* Hover Line */}
              <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-blue-500 rounded-full 
                               transition-all duration-500 group-hover:w-1/2 group-hover:-translate-x-1/2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
