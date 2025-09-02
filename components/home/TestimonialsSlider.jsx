import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rakesh Yadav",
    feedback:
      "The scaffolds we purchased are extremely sturdy and safe. Our construction team feels more confident working at heights now. Excellent quality!",
  },
  {
    name: "Anjali Singh",
    feedback:
      "The aluminum ladders are lightweight yet very strong. They have made day-to-day site work much easier and safer for our staff.",
  },
  {
    name: "Vikram Chauhan",
    feedback:
      "We use their raceways for all our wiring projects. The finishing and durability are top-notch, making our installations more reliable and professional.",
  },
  {
    name: "Sunil Mehta",
    feedback:
      "Their products have truly improved efficiency on our sites. Great value for money, timely delivery, and unmatched build quality.",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="w-full py-6 md:py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from some of our amazing clients who have experienced our work
            first-hand.
          </p>
        </div>

        {/* Swiper Slider */}
     <Swiper
  modules={[Pagination, Navigation, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  navigation={false} // 👈 yaha arrows disable ho gaye
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  breakpoints={{
    768: { slidesPerView: 2 }, 
    1024: { slidesPerView: 3 },
  }}
  className="pb-12"
>
  {testimonials.map((t, i) => (
    <SwiperSlide key={i}>
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between items-center text-center h-full min-h-[260px]">
        <p className="text-gray-700 text-lg mb-6 flex-1">
          “{t.feedback}”
        </p>
        <h4 className="text-xl font-semibold text-gray-900">
          {t.name}
        </h4>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
