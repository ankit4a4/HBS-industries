import Image from 'next/image';
import img from "@/public/images/about/aboutPageWhat.jpg"

export default function MissionSection() {
  return (
    <section className="relative py-8 md:py-16 ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img.src}
          alt="Construction workers at site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Matters To Us</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300">Our Mission</h3>
            <p className="text-lg md:text-xl leading-relaxed">
              To revolutionize construction safety and efficiency through innovative aluminum scaffolding solutions 
              that empower workers, protect lives, and accelerate project completion.
            </p>
          </div>

          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Industry Safety</h3>
              </div>
              <p className="text-gray-200">
                We envision a future where construction sites are accident-free zones, where every worker returns home safely 
                thanks to reliable, certified equipment that exceeds safety standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Maximum Efficiency</h3>
              </div>
              <p className="text-gray-200">
                We're committed to developing equipment that cuts setup time in half, increases mobility, and enhances workflow, 
                helping projects finish ahead of schedule and under budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}