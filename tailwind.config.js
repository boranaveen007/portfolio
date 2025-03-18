/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",  // Dark Blue
        secondary: "#EAB308", // Warm Yellow
        accent: "#FF8A00"     // Orange Glow
      }
    }
  },
  plugins: [],
};