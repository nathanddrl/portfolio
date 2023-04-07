/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFEF2",
          200: "#FFF6C8",
          300: "#FFEA9E",
          400: "#FED874",
          500: "#FCC149",
          600: "#C78723",
          700: "#915711",
          800: "#5C3109",
          900: "#261303",
        },
        neutral: {
          100: "#FCFCFA",
          200: "#EEEDEA",
          300: "#DFDEDA",
          400: "#D0CECA",
          500: "#C2BFBA",
          600: "#9B9792",
          700: "#74706C",
          800: "#4D4A47",
          900: "#262422",
        },
        accent: {
          100: "#F2FAFF",
          200: "#C7ECFF",
          300: "#9BE0FC",
          400: "#6DD6F4",
          500: "#40CAE6",
          600: "#1EA5B6",
          700: "#0E8086",
          800: "#075655",
          900: "#032624",
        },
      },
    },
  },
  plugins: [],
};
