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
        primary: "#FF6B6B",
        dark: "#202124",
        mediumGray: "#5f6368",
        lightGray: "#e1e3e6",
        vanilla: "#F3DFA2",
        "primary-hover": "#183446",
        coral: "#D64045",
        mint: "#E9FFF9",
        skyblue: "#9ED8DB",
        uclablue: "#467599",
        navy: "#1D3354",
      },
      fontFamily: {
        "meow-script": ["Meow Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        right: {
          "0%": { transform: "translatex(100%)" },
          "100%": { transform: "translatex(0)" },
        },
        top: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.75s ease-in-out",
        right: "right 1s ease-in-out",
        top: "top 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
