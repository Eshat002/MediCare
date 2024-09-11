/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "link-color": "#062126",
        primary: "#24BEE0",
      },
    },
  },
  plugins: [],
};
