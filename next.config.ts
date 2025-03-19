// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required for Next.js static export
  },
  basePath: "/portfolio", // Replace with your GitHub repo name
  assetPrefix: "/portfolio/", // Replace with your GitHub repo name
};

module.exports = nextConfig;