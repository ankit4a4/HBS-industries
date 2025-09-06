import Image from 'next/image';

export default function ContactHero() {
  return (
    <div className="relative py-16 md:py-24 h-96 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          alt="Contact us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h1>
        
        {/* Intro Text */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you. Reach out for enquiries, support, or collaborations.
        </p>
        
        {/* Decorative Element */}
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
      </div>
    </div>
  );
}