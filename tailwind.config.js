/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          "black-05": "rgba(250,250,249,0.05)",
          "black-10": "rgba(250,250,249,0.10)",
          "black-20": "rgba(250,250,249,0.20)",
          "black-30": "rgba(250,250,249,0.30)",
          "black-40": "rgba(250,250,249,0.40)",
          "black-50": "rgba(250,250,249,0.50)",
          "black-60": "rgba(250,250,249,0.60)",
          "black-70": "rgba(250,250,249,0.70)",
          "black-80": "rgba(250,250,249,0.80)",
          "black-90": "rgba(250,250,249,0.90)",
          "transparent-white-05": "rgba(248, 250, 252, 0.05)",
          "white-05": "rgba(12,10,9,0.05)",
          "white-10": "rgba(12,10,9,0.10)",
          "white-20": "rgba(12,10,9,0.20)",
          "white-30": "rgba(12,10,9,0.30)",
          "white-40": "rgba(12,10,9,0.40)",
          "white-50": "rgba(12,10,9,0.50)",
          "white-60": "rgba(12,10,9,0.60)",
          "white-70": "rgba(12,10,9,0.70)",
          "white-80": "rgba(12,10,9,0.80)",
          "white-90": "rgba(12,10,9,0.90)",
        },
        light: {
          "black-05": "rgba(12,10,9,0.05)",
          "black-10": "rgba(12,10,9,0.10)",
          "black-20": "rgba(12,10,9,0.20)",
          "black-30": "rgba(12,10,9,0.30)",
          "black-40": "rgba(12,10,9,0.40)",
          "black-50": "rgba(12,10,9,0.50)",
          "black-60": "rgba(12,10,9,0.60)",
          "black-70": "rgba(12,10,9,0.70)",
          "black-80": "rgba(12,10,9,0.80)",
          "black-90": "rgba(12,10,9,0.90)",
          
          "white-05": "rgba(250,250,249,0.05)",
          "white-10": "rgba(250,250,249,0.10)",
          "white-20": "rgba(250,250,249,0.20)",
          "white-30": "rgba(250,250,249,0.30)",
          "white-40": "rgba(250,250,249,0.40)",
          "white-50": "rgba(250,250,249,0.50)",
          "white-60": "rgba(250,250,249,0.60)",
          "white-70": "rgba(250,250,249,0.70)",
          "white-80": "rgba(250,250,249,0.80)",
          "white-90": "rgba(250,250,249,0.90)",
        },
      },
      backgroundColor: {
        primary: "#E99710",
      },
      textColor: {
        primary: "#E99710",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // Add Manrope font
        boldonse: ["Boldonse", "sans-serif"], // Add Boldonse font
        playwrite: ["Playwrite", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"], // Add Playwrite font
      },
      backgroundImage: {
        hero: "url('/public/Backgrounds/blockinfura_bg.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      borderColor: ["dark"],
    },
  },
  plugins: [],
};
