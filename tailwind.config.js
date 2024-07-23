/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#00BFFF",
        accent: "#FF6F00",
        highlight: "#00FF7F",
        darkgray: "#333333",
      },
    },
  },
  plugins: [],
};
