import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        al: ["var(--font-al)"],
      },
      colors: {
        "norm-gray": "#0A090D",
        "norm-white": "#FFFFFF",
        "main-yellow": "#FFDD33",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#09090B",
          },
        },
      },
    }),
    require("tailwind-scrollbar")({ nocompatible: true }),

    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "2px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          backgroundColor: "#2d2d2d",
          borderRadius: "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#c0c0c0",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:active": {
          backgroundColor: "#a0a0a0",
        },
        // ".custom-scrollbar": {
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "#e0e0e0 #2d2d2d",
        // },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
