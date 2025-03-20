/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NEXT_PUBLIC_GITHUB; // Detects GitHub Pages

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: isGithubPages, // Use unoptimized images only for GitHub Pages
  },
  ...(isGithubPages && {
    output: "export",
    basePath: "/portfolio", // Replace with GitHub repo name
    assetPrefix: "/portfolio/",
  }),
};

module.exports = nextConfig;