/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        instrument:['"Instrument sans"', 'sans-serif'],
        peddana:['Peddana', 'serif'],
        poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}