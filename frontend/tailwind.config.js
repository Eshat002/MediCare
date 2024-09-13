/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24BEE0",
        primaryBlack: "#062126",
      },
    },
  },
  plugins: [],
};
