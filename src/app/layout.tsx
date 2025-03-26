import FloatingParticles from "@/components/FloatingParticles";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* SEO Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Naveen Bora | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Naveen Bora – Full Stack Developer skilled in Node.js, React, GraphQL, and AI/ML technologies. Creator of JobFitPro." />
        <meta name="keywords" content="Naveen Bora, Full Stack Developer, React Developer, Node.js Developer, GraphQL, TypeScript, JobFitPro, Software Engineer, Resume Tool" />
        <meta name="author" content="Naveen Bora" />
        <meta property="og:title" content="Naveen Bora | Full Stack Developer" />
        <meta property="og:description" content="Explore Naveen Bora’s portfolio featuring JobFitPro, BFF APIs, AI tools and modern frontend projects using React, Next.js, and Tailwind." />
        <meta property="og:image" content="https://naveen-bora.vercel.app/og-preview.jpg" /> 
        <meta property="og:url" content="https://naveen-bora.vercel.app/" />
      </Head>
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