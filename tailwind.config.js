/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'extra-wide': 'calc((100vw - 1920px) / 2)', // Adds the space on both sides when screen width > 1920px
      },
    
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
