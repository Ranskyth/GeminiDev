// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|input|modal|ripple|spinner|form).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],

};
