// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D3354",
        secondary: "#467599",
        accent: "#FF6B6B",
        "accent-dark": "#D64045",
        mint: "#E9FFF9",
        skyblue: "#9ED8DB",
      },
      fontFamily: {
        "meow-script": ["Meow Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
