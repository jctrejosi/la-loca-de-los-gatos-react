/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // ------------- Gray Scale ----------------
      "light-color": "#fff",
      "practically-light-color": "#e6e6e6",
      "almost-light-color": "#ccc",
      "nearly-light-color": "#b3b3b3",
      "mid-light-color": "#555555",
      "mid-color": "#808080",
      "mid-dark-color": "#666",
      "nearly-dark-color": "#4d4d4d",
      "almost-dark-color": "#333",
      "practically-dark-color": "#1a1a1a",
      "dark-color": "#000",

      // ------------- Base Colors ---------------

      "main-color": "#C7B3F2",
      "custom-color": "#F28095",
      "extra-color": "#F2D0A7",
      "purple-color": "#A37EF2",
      "gray-color": "#EEF0EB",
      "blue-color": "#A2D2FF",

      // -------- base backgrounds colors --------

      primary: "#C7B3F2",
      secondary: "#F2F2F2",
      glass: "rgba(242, 242, 242, .7)",
    },
    fontFamily: {
      main: ["Agrandir-Narrow"],
      custom: ["Josefin-Slab"],
    },
    screens: {
      sm: "489px",
      md: "769px",
      lg: "1025px",
      xl: "1250px",
    },
  },
  plugins: [],
};
