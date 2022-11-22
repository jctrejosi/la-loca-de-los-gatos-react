/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // ------------- Gray Scale ----------------
      "light-color": "var(--light-color)",
      "practically-light-color": "var(--practically-light-color)",
      "almost-light-color": "var(--almost-light-color)",
      "nearly-light-color": "var(--nearly-light-color)",
      "mid-light-color": "var(--mid-light-color)",
      "mid-color": "var(--mid-color)",
      "mid-dark-color": "var(--mid-dar-color)",
      "nearly-dark-color": "var(--nearly-dark-color)",
      "almost-dark-color": "var(--almost-dark-color)",
      "practically-dark-color": "var(--practically-dark-color)",
      "dark-color": "var(--dark-color)",

      // ------------- Base Colors ---------------

      "main-color": "var(--main-color)",
      "custom-color": "var(--custom-color)",
      "yellow-color": "var(--yellow-color)",
      "yellow-color-hover": "var(--yellow-color-hover)",
      "purple-color": "var(--purple-color)",
      "gray-color": "var(--gray-color)",
      "blue-color": "var(--blue-color)",

      // -------- base backgrounds colors --------

      primary: "var(--bg-primary)",
      secondary: "var(--bg-secondary)",
      glass: "var(--bg-glass)",
    },
    fontFamily: {
      main: ["Agrandir-Narrow"],
      custom: ["Josefin-Slab"],
    },
    screens: {
      xs: "365px",
      sm: "569px",
      md: "769px",
      lg: "1025px",
      xl: "1250px",
    },
    backgroundImage: {
      circle: "url('@/assets/images/bg-footer.png')",
    },
  },
};
