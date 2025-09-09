import Image from 'next/image';
import img from "@/public/images/home/banner2.jpg"


export default function HeroSection() {
  return (
    <div className="relative h-[400px] px-4  w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={img.src}
          alt="Scaffolding and ladder solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
         Our Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
         omprehensive solutions for all your scaffolding and ladder needs
          </p>
         
        </div>
      </div>
    </div>
  );
}