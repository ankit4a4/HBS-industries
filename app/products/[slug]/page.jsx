"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import single1 from "public/productImage/single1.png"
import single2 from "public/productImage/single2.png"
import single3 from "public/productImage/single3.png"
import single4 from "public/productImage/single4.png"
import doubleHeight1 from "public/productImage/DoubleHeight1.png"
import doubleHeight2 from "public/productImage/DoubleHeight2.png"
import doubleHeight3 from "public/productImage/DoubleHeight3.png"
import doubleHeight4 from "public/productImage/DoubleHeight4.png"
import triple1 from "public/productImage/TripleHeight1.png"
import triple2 from "public/productImage/TripleHeight2.png"
import triple3 from "public/productImage/TripleHeight3.png"
import triple4 from "public/productImage/TripleHeight4.png"
import aType1 from "public/productImage/AType1.png"
import aType2 from "public/productImage/AType2.png"
import aType3 from "public/productImage/AType3.png"
import aType4 from "public/productImage/AType4.png"
import aType5 from "public/productImage/AType5.png"
import airport1 from "public/productImage/Airport1.png"
import airport2 from "public/productImage/Airport2.png"
import airport3 from "public/productImage/Airport3.png"
import airport4 from "public/productImage/Airport4.png"
import airport5 from "public/productImage/Airport5.png"


export default function SingleProductPage() {
    const params = useParams();
    const { slug } = params;

    const products = [
        {
            title: "Single Width Mobile Scaffolding",
            slug: "single-width-mobile-scaffolding",
            make: "Jindal Aluminium",
            description: [
                "HBS Aluminium Scaffoldings allow your workers to reach heights safely. Its sturdy and solid structure provides a better position to work on walls & ceilings.",
                "A Semi-Vertical Stairways to access platform, that is designed to climb up-words from the inner side of scaffold; allows proper access to the scaffolds & ensures maximum safety.",
                "A firm Guard Rail works as a fall Protection.",
                "Castor Wheels with breaks prevent rolling and turning and ensure foundation stability.",
                "Toe Boards effectively reduces the chances of workers, equipment and materials from slipping or falling from the scaffold platform (Available in Aluminum & Wooden platforms).",
                "Lateral Side Stabilizers are helpful to support a higher scaffolds, an additional firmness to secure base of the scaffolding.",
                "Circular fluted sections provide better hold & support to the worker ensuring comfort & safety."
            ],
            images: [
                single1.src, single2.src, single3.src, single4.src
            ],
            specs: [
                { label: "Platform Height", value: "1.87 to 3.8 M" },
                { label: "Guard Rail Height", value: "1.0 M" },
                { label: "Total Scaffold Height", value: "2.87 to 4.8 M" },
                { label: "Working Height", value: "3.57 to 5.5 M" },
                { label: "Customization", value: "Available (As per safety standards)" }
            ],
            variations: [
                {
                    title: "Single Width Scaffolds",
                    options: ["0.75 M", "0.9 M", "1 M"],
                    children: [
                        { title: "Single Height", options: ["1.87", "2.2 M"] },
                        { title: "Double Height", options: ["3.2", "3.47", "3.57", "3.8 M"] }
                    ]
                }
            ]
        },
        {
            title: "Double Height Mobile Scaffolding",
            slug: "double-height-mobile-scaffolding",
            make: "Jindal Aluminium",
            description: [
                "HBS Aluminium Scaffoldings allow your workers to reach heights safely. Its sturdy and solid structure provides a better position to work on walls & ceilings.",
                "A Semi-Vertical Stairways to access platform, that is designed to climb up-words from the inner side of scaffold; allows proper access to the scaffolds & ensures maximum safety.",
                "A firm Guard Rail works as a fall Protection.",
                "Castor Wheels with breaks prevent rolling and turning and ensure foundation stability.",
                "Toe Boards effectively reduces the chances of workers, equipment and materials from slipping or falling from the scaffold platform (Available in Aluminum & Wooden platforms).",
                "Lateral Side Stabilizers are helpful to support a higher scaffolds, an additional firmness to secure base of the scaffolding.",
                "Circular fluted sections provide better hold & support to the worker ensuring comfort & safety."
            ],
            images: [
                doubleHeight1.src, doubleHeight2.src, doubleHeight3.src, doubleHeight4.src
            ],
            specs: [
                { label: "Platform Height", value: "1.87 to 5.4 M & onwards" },
                { label: "Guard Rail Height", value: "1.0 M" },
                { label: "Total Scaffold Height", value: "2.87 to 6.4 M & onwards" },
                { label: "Working Height", value: "3.57 to 7.1 M & onwards" },
                { label: "Customization", value: "Available (As per safety standards)" }
            ],
            variations: [
                {
                    title: "Double Width Scaffolds",
                    options: ["1.0 M", "1.2 M"],
                    children: [
                        { title: "Double Height", options: ["3.8", "4.2", "4.5", "5.0 M"] },
                        { title: "Triple Height", options: ["5.4", "5.8", "6.0 M"] }
                    ]
                }
            ]
        },
        {
            title: "Triple Height Mobile Scaffolding",
            slug: "triple-height-mobile-scaffolding",
            make: "Jindal Aluminium",
            description: [
                "HBS Aluminium Scaffoldings allow your workers to reach heights safely. Its sturdy and solid structure provides a better position to work on walls & ceilings.",
                "A Semi-Vertical Stairways to access platform, that is designed to climb up-words from the inner side of scaffold; allows proper access to the scaffolds & ensures maximum safety.",
                "A firm Guard Rail works as a fall Protection.",
                "Castor Wheels with breaks prevent rolling and turning and ensure foundation stability.",
                "Toe Boards effectively reduces the chances of workers, equipment and materials from slipping or falling from the scaffold platform (Available in Aluminum & Wooden platforms).",
                "Lateral Side Stabilizers are helpful to support a higher scaffolds, an additional firmness to secure base of the scaffolding.",
                "Circular fluted sections provide better hold & support to the worker ensuring comfort & safety."
            ],
            images: [
                triple1.src, triple2.src, triple3.src, triple4.src
            ],
            specs: [
                { label: "Platform Height", value: "1.87 to 5.4 M & onwards" },
                { label: "Guard Rail Height", value: "1.0 M" },
                { label: "Total Scaffold Height", value: "2.87 to 6.4 M & onwards" },
                { label: "Working Height", value: "3.57 to 7.1 M & onwards" },
                { label: "Customization", value: "Available (As per safety standards)" }
            ],
            variations: [
                {
                    title: "Triple Width Scaffolds",
                    options: ["1.2 M", "1.5 M"],
                    children: [
                        { title: "Triple Height", options: ["5.4", "5.8", "6.0 M"] },
                        { title: "Quad Height", options: ["6.4", "6.8", "7.1 M"] }
                    ]
                }
            ]
        },
        {
            title: "A Type Ladders",
            slug: "a-type-ladders",
            make: "Jindal Aluminium",
            description: [
                "HBS Aluminium Ladders allow your workers to reach heights safely. Its sturdy and solid structure provides a better position to work on walls & ceilings.",
                "Caged ladder provides additional fall protection.",
                "Railing provides stability, it helps workers maintain their balance on steps whilst climbing.",
                "Floor Protection Cap provides an additional support by making the ladder non slippery & steady."
            ],
            images: [
                aType1.src, aType2.src, aType3.src, aType4.src, aType5.src,
            ],
            specs: [
                { label: "Ladder Height", value: "6, 8, 10 Ft" },
                { label: "Working Height", value: "10, 12, 14 Ft" },
                { label: "Customization", value: "Available (As per safety standards)" }
            ],
            variations: [
                {
                    title: "Standard Ladders",
                    options: ["6 Ft", "8 Ft", "10 Ft"],
                    children: [
                        { title: "Single Step", options: ["6", "8"] },
                        { title: "Double Step", options: ["10"] }
                    ]
                }
            ]
        },
        {
            title: "Airport Ladders",
            slug: "airport-ladders",
            make: "Jindal Aluminium",
            description: [
                "HBS Aluminium Ladders allow your workers to reach heights safely. Its sturdy and solid structure provides a better position to work on walls & ceilings.",
                "Caged ladder provides additional fall protection.",
                "Railing provides stability, it helps workers maintain their balance on steps whilst climbing.",
                "Castor Wheels with brakes prevent rotation and movement and ensure foundation stability.",
                "Toe Boards effectively reduces the chances of workers, equipment and materials from slipping or falling from the scaffold platform (Available in Aluminium & Wooden platforms)."
            ],
            images: [
                airport1.src, airport2.src, airport3.src, airport4.src, airport5.src,
            ],
            specs: [
                { label: "Ladder Height", value: "6, 8, 10 Ft" },
                { label: "Working Height", value: "10, 12, 14 Ft" },
                { label: "Customization", value: "Available (As per safety standards)" }
            ],
            variations: [
                {
                    title: "Airport Ladders",
                    options: ["6 Ft", "8 Ft", "10 Ft"],
                    children: [
                        { title: "Single Step", options: ["6", "8"] },
                        { title: "Double Step", options: ["10"] }
                    ]
                }
            ]
        }
    ];

    // Find product based on slug
    const product = products.find(p => p.slug === slug);

    // Selected Image state
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    useEffect(() => {
        if (product) setSelectedImage(product.images[0]);
    }, []);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-10">
                <p className="text-center text-red-500">Product not found!</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left side - Image Gallery */}
                <div className="flex flex-col items-center">
                    <div className="border rounded-lg p-3 mb-4 w-full max-w-md">
                        <Image
                            src={selectedImage}
                            alt="Product Image"
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="flex gap-3 justify-center flex-wrap">
                        {product.images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className={`cursor-pointer border rounded-md overflow-hidden ${selectedImage === img ? "ring-2 ring-blue-500" : ""}`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Product Details */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                        {product.title}
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                        Make:{" "}
                        <span className="text-blue-500 font-medium">{product.make}</span>
                    </p>

                    <div className="space-y-3 text-gray-700">
                        {product.description.map((point, idx) => (
                            <p key={idx} className="leading-relaxed">{point}</p>
                        ))}
                    </div>

                    {/* Variations */}
                    <div className="mt-6">
                        {product.variations.map((variation, idx) => (
                            <div key={idx} className="mb-6">
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {variation.title}:{" "}
                                    <span className="text-blue-600">{variation.options.join(", ")}</span>
                                </h3>
                                <div className="ml-4 mt-2 space-y-1">
                                    {variation.children.map((child, cIdx) => (
                                        <p key={cIdx} className="text-gray-700">
                                            <span className="font-medium">{child.title}:</span>{" "}
                                            {child.options.join(", ")}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {product.specs.map((spec, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg shadow p-4 border border-gray-200">
                                <p className="text-gray-600 text-sm">{spec.label}</p>
                                <p className="text-gray-900 font-semibold">{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
