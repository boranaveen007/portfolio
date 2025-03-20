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
    name: "Prasuna Rajagiri",
    role: "Associate Staff Engineer at Nagarro",
    feedback:
      "Working with Naveen was a great experience. His expertise in full-stack development and cloud solutions helped us scale our project seamlessly.",
    image: "/testimonials/prasuna_rajagiri.jpg",
    linkedin: "https://www.linkedin.com/in/gnani-prasuna/",
  },
  {
    name: "Parameswara Reddy",
    role: "MSCS Student at University of Cincinnati",
    feedback:
      "Studying alongside Naveen has been a great experience. His dedication, problem-solving skills, and commitment to excellence make him a truly inspiring and dependable friend.",
    image: "/testimonials/parameswara_reddy.jpg",
    linkedin: "https://www.linkedin.com/in/parameswarareddypalle/",
  },
  {
    name: "Saketh Kolluri",
    role: "UX/UI Designer at AidenAI",
    feedback:
      "Working with Naveen was a great experience. He not only excels in coding but also understands user experience beyond the code. His proactive collaboration, problem-solving skills, and clean coding practices made every project smoother. Any team would be lucky to have him!",
    image: "/testimonials/saketh_kolluri.jpg",
    linkedin: "https://www.linkedin.com/in/saketh-kolluri/",
  },
  {
    name: "Vindhya Sampathi Rao",
    role: "Software Development Engineer at Akrivia",
    feedback:
      "Naveen’s tech expertise, logical thinking, and problem-solving skills set him apart. His innovative approach is truly impressive.",
    image: "/testimonials/vindhya_sampathi_rao.jpg",
    linkedin: "https://www.linkedin.com/in/vindhya-sampathi-rao-590846103/",
  },
  {
    name: "Radha Krishna",
    role: "Software Development Engineer-2 at Akrivia",
    feedback:
      "I worked with Naveen for three years and witnessed his dedication, professionalism, and problem-solving skills. His teamwork and positive attitude make him a reliable and skilled professional. I highly recommend him as a skilled and committed team player.",
    image: "/testimonials/radha_krishna.jpg",
    linkedin: "https://www.linkedin.com/in/radhakrishna99/",
  },
  {
    name: "Sai Praveen Gara",
    role: "Software Development Engineer at Akrivia",
    feedback:
      "Naveen is an exceptional developer who combines technical brilliance with a passion for perfection—his work not only met but exceeded all expectations.",
    image: "/testimonials/praveen_gara.jpg",
    linkedin: "https://www.linkedin.com/in/sai-praveen-gara-a0607321a/",
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full mx-auto px-20"
          freeMode={{ enabled: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.name}-${index}`}>
              <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-2xl border border-white/20 p-6 flex flex-col items-center text-center hmin-h-[320px] md:min-h-[350px] lg:min-h-[380px]">
                {/* 🖼️ Profile Image (Clickable) */}
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-400 cursor-pointer">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={72}
                      height={72}
                      className="rounded-full object-cover"
                      priority={index === 0} // First image loads first
                    />
                  </div>
                </a>

                {/* 📝 Feedback */}
                <p className="text-lg text-gray-300 mt-4">
                  {testimonial.feedback}
                </p>

                {/* ✍️ Author Name (Clickable) */}
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-semibold text-orange-400 mt-4 cursor-pointer">
                    {testimonial.name}
                  </h3>
                </a>

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
