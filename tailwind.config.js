import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff7f00", // মূল primary color (orange)
          light: "#ffa64d", // হালকা orange
          dark: "#cc6600", // গাঢ় orange
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
