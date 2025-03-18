"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Testimonial Data
const testimonials = [
  {
    name: "John Doe",
    role: "Senior Engineer at TechCorp",
    feedback:
      "Working with Naveen was a great experience. His expertise in full-stack development and cloud solutions helped us scale our project seamlessly.",
    image: "/testimonials/user1.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager at DevWorks",
    feedback:
      "Naveen is a highly skilled developer who delivers high-quality work on time. His problem-solving ability is truly impressive!",
    image: "/testimonials/user2.jpg",
  },
  {
    name: "Michael Smith",
    role: "CTO at StartupX",
    feedback:
      "Exceptional developer with a deep understanding of modern web technologies. Highly recommend him for any tech-driven project!",
    image: "/testimonials/user3.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Lead Designer at PixelPerfect",
    feedback:
      "Naveen is a pleasure to work with. His attention to detail and ability to deliver high-quality solutions is outstanding!",
    image: "/testimonials/user4.jpg",
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer at CloudFlow",
    feedback:
      "A fantastic developer who knows how to optimize systems efficiently. Naveen’s expertise in cloud computing is top-notch!",
    image: "/testimonials/user5.jpg",
  },
  {
    name: "Emily Johnsinson",
    role: "Lead Designer at PixelPerfect",
    feedback:
      "Naveen is a pleasure to work with. His attention to detail and ability to deliver high-quality solutions is outstanding!",
    image: "/testimonials/user4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-8 px-4 h-auto">
      {/* 🔥 Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What <span className="text-orange-400">People Say</span>
      </motion.h2>


      <div className="relative w-full mx-auto">
      {/* 🏆 Swiper FreeMode Looping Carousel */}
      <Swiper
        modules={[Pagination, Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={1} // Mobile default
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Laptops
          1280: { slidesPerView: 3 }, // Large Screens
        }}
        pagination={{ clickable: true, el: ".testimonials-pagination" }} // ✅ Enables pagination
        loop={true} // ✅ Enables infinite looping
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full mx-auto px-20"
        freeMode={{enabled: true}}
      >
        {testimonials.map((testimonial, index) => (
           <SwiperSlide key={`${testimonial.name}-${index}`}> 
            <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-2xl border border-white/20 p-6 flex flex-col items-center text-center h-72">
              {/* 🖼️ Profile Image */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-400">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  priority={index === 0} // First image loads first
                />
              </div>

              {/* 📝 Feedback */}
              <p className="text-lg text-gray-300 mt-4">{testimonial.feedback}</p>

              {/* ✍️ Author */}
              <h3 className="text-xl font-semibold text-orange-400 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="testimonials-pagination flex justify-center mt-6"></div>
    </section>
  );
}