import Image from 'next/image';
import { FaTools, FaTruck, FaMoneyBillAlt, FaChalkboardTeacher, FaClipboardCheck, FaExchangeAlt } from 'react-icons/fa';
import img1 from "@/public/images/service/esy-rental.jpg"
import img2 from "@/public/images/service/cost-seving.jpg"
import img3 from "@/public/images/service/on-site-training.jpg"
import img4 from "@/public/images/service/maintanance-Checkkk.jpg"
import img5 from "@/public/images/service/timely-delevery.jpg"
import img6 from "@/public/images/service/maintanance-check.jpg"
export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Easy Rental",
            icon: <FaMoneyBillAlt className="text-3xl text-blue-600" />,
            description: "Flexible rental options for short-term projects with daily, weekly, and monthly plans. No long-term commitments required.",
            fullDescription: "Our Easy Rental service provides flexible solutions for construction projects of any scale. Whether you need scaffolding for a weekend project or long-term equipment for extensive construction, we have options to suit your needs. Our rental process is streamlined for maximum convenience with online booking, quick approval, and flexible payment options.",
            images: [
                img1
            ],
            features: [
                "No security deposits required",
                "Flexible duration options (daily, weekly, monthly)",
                "Online booking system available 24/7",
                "Short-term commitments with easy extensions",
                "Delivery and pickup included in premium plans"
            ],
            process: [
                "Select equipment and duration online or via phone",
                "Get instant quote and approval",
                "We deliver to your site on scheduled date",
                "Use equipment for your project duration",
                "We pick up when you're done"
            ]
        },
        {
            id: 2,
            title: "Cost-Saving Purchase",
            icon: <FaMoneyBillAlt className="text-3xl text-blue-600" />,
            description: "Own high-quality equipment with our competitive pricing and financing options. Bulk purchase discounts available.",
            fullDescription: "Invest in quality with our Cost-Saving Purchase options. We offer premium scaffolding and ladders at competitive prices with various financing options to suit your budget. Our equipment is built to last, ensuring you get the best return on your investment with minimal maintenance costs over the years.",
            images: [
                img2
            ],
            features: [
                "Competitive pricing with volume discounts",
                "Flexible financing options available",
                "Bulk purchase discounts for large orders",
                "Trade-in programs for existing equipment",
                "Complete documentation and warranty"
            ]
        },
        {
            id: 3,
            title: "On-Site Product Trainings",
            icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
            description: "Comprehensive training programs at your location to ensure your team can safely and efficiently use our equipment.",
            fullDescription: "Safety is our top priority. Our On-Site Product Training ensures your team is fully equipped to handle our scaffolding and ladders safely and efficiently. Our certified trainers come to your location at your convenience, providing hands-on training tailored to your specific equipment and project requirements.",
            images: [
                img3
            ],
            features: [
                "Certified trainers with industry experience",
                "Comprehensive safety protocols training",
                "Hands-on practice with actual equipment",
                "Customized training based on your projects",
                "Certification provided upon completion"
            ]
        },
        {
            id: 4,
            title: "Maintenance Check",
            icon: <FaClipboardCheck className="text-3xl text-blue-600" />,
            description: "Regular maintenance services to keep your equipment in optimal condition and extend its lifespan.",
            fullDescription: "Keep your equipment in peak condition with our professional Maintenance Check services. Our certified technicians perform thorough inspections, identify potential issues before they become problems, and ensure your scaffolding and ladders meet all safety standards. Regular maintenance not only extends equipment life but also ensures worksite safety.",
            images: [
                img4
            ],
            features: [
                "Scheduled inspections at your convenience",
                "Preventive maintenance to avoid breakdowns",
                "Compliance with all safety standards",
                "Detailed inspection reports with recommendations",
                "Emergency repair services available"
            ]
        },
        {
            id: 5,
            title: "Timely Deliveries",
            icon: <FaTruck className="text-3xl text-blue-600" />,
            description: "Reliable delivery service that ensures your equipment arrives exactly when and where you need it.",
            fullDescription: "We understand that time is critical in construction projects. Our Timely Delivery service ensures that your equipment arrives exactly when and where you need it. With our fleet of specialized vehicles and experienced logistics team, we guarantee on-time delivery to keep your projects on schedule, regardless of location or order size.",
            images: [
                img5
            ],
            features: [
                "On-time delivery guarantee",
                "Real-time tracking system",
                "Flexible scheduling to match your timeline",
                "Nationwide coverage with no hidden charges",
                "Professional unloading and setup assistance"
            ]
        },
        {
            id: 6,
            title: "Replacements or Repairs",
            icon: <FaExchangeAlt className="text-3xl text-blue-600" />,
            description: "Quick replacement of damaged equipment and efficient repair services to minimize your downtime.",
            fullDescription: "Equipment issues can cause costly project delays. Our Replacement and Repair service minimizes downtime with quick response times and efficient solutions. Whether you need a replacement part, emergency repair, or complete equipment exchange, our team is ready to assist with genuine parts and expert technicians to get you back on track quickly.",
            images: [
                img6
            ],
            features: [
                "24/7 emergency support available",
                "Quick response time with on-site repairs",
                "Genuine replacement parts guarantee",
                "Warranty coverage for all repairs",
                "Loaner equipment during major repairs"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                {services.map((service, index) => (
                    <div key={service.id} className={`mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 relative">
                                    <div className="h-64 md:h-full relative">
                                        <Image
                                            src={service.images[0].src}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="md:w-1/2 p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                                    </div>

                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {service.fullDescription}
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Features</h3>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}