"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

// Sections (excluding "home" as per request)
const sections = ["about", "projects", "resume", "testimonials", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setScrolled(window.scrollY > 50);

      // Determine which section is in view
      const scrollPosition = window.scrollY + 300; // Adjust offset if needed
      let foundSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            foundSection = section;
          }
        }
      });

      setActiveSection(foundSection); // Update active section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (Takes user to Home) */}
        <Link href="#home" className="text-2xl font-bold text-orange-400">
          Naveen's Portfolio
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-lg transition-all duration-300 ${
                activeSection === section ? "text-orange-400 font-semibold" : "text-white hover:text-orange-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-900 shadow-md p-4 md:hidden"
          >
            {sections.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`block text-lg py-2 transition-all duration-300 ${
                  activeSection === section ? "text-orange-400 font-semibold" : "text-white hover:text-orange-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}