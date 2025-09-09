"use client";

import Image from "next/image";
import React from "react";
import img1 from "@/public/productImage/1.png"
import img2 from "@/public/productImage/2.jpg"
import img3 from "@/public/productImage/3.jpg"
import img4 from "@/public/productImage/4.jpg"
import img5 from "@/public/productImage/5.jpg"
import img6 from "@/public/productImage/6.jpg"
import img7 from "@/public/productImage/7.jpg"
import img8 from "@/public/productImage/8.jpg"
import img9 from "@/public/productImage/9.jpg"
import img10 from "@/public/productImage/10.png"
import { useRouter } from "next/navigation";

const trays = [
    { title: "Solid Cable Trays", image: img1.src ,  tag: "solid-cable-trays" },
    { title: "Ladder Type Cable Trays", image: img2.src ,    tag: "ladder-type-cable-trays" },
    { title: "Perforated Cable Tray", image: img3.src ,  tag: "perforated-cable-tray" },
    { title: "Wire Mesh Cable Trays", image: img4.src , tag: "wire-mesh-cable-trays" },
    { title: "Teen Bend", image: img5.src ,    tag: "teen-bend" },
    { title: "Vertical Curve Bend", image: img6.src ,  tag: "vertical-curve-bend" },
    { title: "Cross Bend", image: img7.src ,  tag: "cross-bend" },
    { title: "Horizontal Bend", image: img8.src ,  tag: "horizontal-bend" },
    { title: "Reducer Bend", image: img9.src ,  tag: "reducer-bend" },
    { title: "Solid Cable Tray", image: img10.src , g: "solid-cable-tray-two" },
];

export default function Page() {

    const router = useRouter()
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 p-1 rounded-lg mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded-md bg-gray-900">
                            Raceways / Cable Trays
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 mb-8">
                        Explore our premium range of cable management solutions designed for durability, efficiency, and optimal performance in industrial and commercial applications.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-800 hover:to-blue-950 flex items-center">
                            <span>Powder Coated Trays</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button 
                        onClick={() => router.push('/trays#Specifications')}
                        className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-gray-800 hover:to-gray-950 flex items-center">
                            <span>Specifications</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {trays.map((tray, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group"
                        >
                            <div className="relative w-full h-[135px] overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <Image
                                    src={tray.image}
                                    alt={tray.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                    #{index + 1}
                                </div>
                            </div>
                            <div className="p-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
                                <h3 className="font-semibold text-center text-sm md:text-base">{tray.title}</h3>
                                <button 
                                onClick={() => router.push(`/trays#${tray.tag}`)}
                               
                                className="mt-3 w-full bg-white text-blue-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Cable Management Solutions</h2>
                        <p className="text-gray-300 mb-6">
                            Our cable trays are manufactured using the highest quality materials and cutting-edge technology to ensure durability, safety, and optimal cable management for industrial and commercial applications.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Corrosion Resistant</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>High Load Capacity</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Easy Installation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}