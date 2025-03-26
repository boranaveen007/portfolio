export const metadata = {
  title: "Naveen Bora | Full Stack Developer",
  description: "Portfolio of Naveen Bora – Full Stack Developer skilled in Node.js, Angular, React, Next.js, GraphQL, and AI/ML technologies. Creator of JobFitPro.",
  keywords: [
    "Naveen Bora",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "GraphQL",
    "TypeScript",
    "JobFitPro",
    "Software Engineer",
    "Resume Tool"
  ],
  openGraph: {
    title: "Naveen Bora | Full Stack Developer",
    description: "description: Hi, I'm Naveen Bora – a Full Stack Developer crafting modern web apps and intelligent tools like JobFitPro. Specializing in BFF architecture, GraphQL APIs, and scalable UI experiences with React, Angular and Next.js.",
    url: "https://naveen-bora.vercel.app",
    siteName: "Naveen Bora Portfolio",
    images: [
      {
        url: "https://naveen-bora.vercel.app/profile.jpg",
        width: 800,
        height: 800,
        alt: "Naveen Bora – Full Stack Developer"
      }
    ],
    type: "website"
  }
};

import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white relative">
        {/* 🎇 Global 3D Floating Stars + Particles */}
        <FloatingParticles />

        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}