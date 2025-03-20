"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // ✅ Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle email sending
  const handleSendEmail = () => {
    const email = "your@email.com"; // Change to your email
    const subject = `New Contact Inquiry from ${form.name}`;
    const body = `Hi, I am ${form.name}

${form.message}

You can reply to me at: ${form.email}
`;

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4"
    >
      <motion.div
        className="max-w-2xl w-full bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 📌 Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Get In <span className="text-orange-400">Touch</span>
        </h2>

        {/* 📩 Contact Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {/* ✉️ Send Button */}
          <button
            type="button"
            onClick={handleSendEmail}
            className="mt-4 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* 🌍 Social Links */}
      <div className="mt-8 flex gap-6 text-white">
        <a
          href="https://github.com/boranaveen007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-orange-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/naveen-bora/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-orange-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/naveen_bora_7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-orange-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
