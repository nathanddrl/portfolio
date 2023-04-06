/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F77F00",
        secondary: "#FCBF49",
        accent: "#003049",
        light: "#EAE2B7"
      },
    },
  },
  plugins: [],
}