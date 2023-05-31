/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "karmatic-arcade": ["Karmatic Arcade"],
      silkscreen: ["var(--font-silkscreen)"],
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      blue: "#2B83F6",
      grey: "#A4A4A4",
    },
  },
  plugins: [],
};
