"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Project Data
const projects = [
  {
    title: "Chrome Tab Manager Extension",
    description:
      "A Chrome extension to efficiently manage and organize browser tabs, improving productivity.",
    images: ["/projects/TabManagerExtension/tabmanager.png"],
    techStack: ["TypeScript", "Chrome Extension API", "Tailwind CSS"],
    liveDemo: "",
    github: "https://github.com/boranaveen007/tab-manager-extension",
  },
  {
    title: "JobFitPro",
    description:
      "An AI-driven resume analysis tool that optimizes resumes for ATS and job match.",
    images: [
      "/projects/JobFitPro/jobfitpro-1.png",
      "/projects/JobFitPro/jobfitpro-2.png",
      "/projects/JobFitPro/jobfitpro-3.png",
      "/projects/JobFitPro/jobfitpro-4.png",
      "/projects/JobFitPro/jobfitpro-5.png",
      "/projects/JobFitPro/jobfitpro-6.png",
      "/projects/JobFitPro/jobfitpro-7.png",
      "/projects/JobFitPro/jobfitpro-8.png",
    ],
    techStack: [
      "React",
      "FastAPI",
      "Tailwind CSS",
      "Python",
      "Open-source LLMs",
    ],
    liveDemo: "https://jobfitpro.vercel.app",
    github: "https://github.com/boranaveen007/JobFitPro",
  },
  {
    title: "Real-Time Driver Drowsiness Detection System",
    description:
      "A real-time driver drowsiness detection system that monitors fatigue using computer vision and ML models to alert drivers and prevent accidents.",
    images: ["/projects/DriverDrowsiness/driverDrowsiness.png"],
    techStack: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "SciPy",
      "NumPy",
      "Playsound",
      "Pygame",
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "PUBG Winner Prediction Using ML",
    description:
      "Training a model to predict the winner in a PUBG game using a dataset of 87,899 player stats, leveraging a linear regression algorithm for accuracy.",
    images: ["/projects/PubgWinner/pubg.jpeg"],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Linear Regression",
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "Blackjack Game with GUI",
    description:
      "A Python-based Blackjack card game that simulates player-dealer interactions, following traditional game rules with random card distribution.",
    images: ["/projects/BlackJack/blackjack.png"],
    techStack: [
      "Python",
      "Pygame",
      "Random Library",
      "OOP (Object-Oriented Programming)",
      "GUI Development",
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "Political Sentiment Analysis",
    description:
      "A web-based system that filters comments and classifies political sentiments as positive, negative, or neutral using NLP techniques.",
    images: ["/projects/PoliticalSentimentAnalysis/psa_diagram.png"],
    techStack: [
      "Python",
      "JavaScript",
      "React.js/Angular",
      "NLTK",
      "TextBlob",
      "VADER Sentiment Analysis",
      "TensorFlow",
      "MongoDB",
      "Bootstrap",
    ],
    liveDemo: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 px-2">
      {/* 🔥 Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-orange-400">Projects</span>
      </motion.h2>

      {/* 📌 Swiper Coverflow Effect */}
      <div className="flex justify-center">
        {/* <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true} // ✅ Loop through projects infinitely
          // loopedSlides={3}// ✅ Controls looping slides
          coverflowEffect={{
            rotate: 30, // ✅ Rotation effect
            depth: 400, // ✅ Depth effect (negative pulls backward)
            // modifier: 0.2, // ✅ Adjusts scaling effect
            scale: 0.7, // ✅ Enlarges the center project
          }}
          pagination={{ clickable: true }}
          navigation={true}
          speed={1000} // ✅ Smooth transition speed 300ms
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-5xl"
        > */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          navigation={true}
          speed={1000}
          loopAdditionalSlides={0}
          coverflowEffect={{
            rotate: 30,
            stretch: 1,
            depth: 600,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // ✅ Custom external pagination
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="w-full relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="relative bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 max-w-4xl mx-auto"
            >
              {/* 🖼️ Project Image */}
              <Swiper
                effect="cards"
                grabCursor={true}
                loop={true}
                modules={[EffectCards]}
                className="rounded-md overflow-hidden mb-4"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    className="flex justify-center items-center"
                  >
                    <div className="relative w-[500px] h-[300px] flex items-center justify-center mx-auto">
                      <Image
                        src={img}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 📝 Project Info */}
              <h3 className="text-3xl text-center font-semibold text-orange-400 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-center mt-2">
                {project.description}
              </p>

              {/* 🔗 Links & Tech Stack */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/20 border border-orange-400 text-orange-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 justify-center">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="px-3 py-1 bg-orange-400 hover:bg-orange-600 text-gray-300 text-sm rounded-lg"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-3 py-1 bg-gray-700 border border-gray-500 text-gray-300 text-sm rounded-lg"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-pagination flex justify-center mt-6"></div>
    </section>
  );
}
