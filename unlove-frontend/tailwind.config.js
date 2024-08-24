/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#170804',
        white: '#FFEEE5',
        // Redish colors decreasing intensity
        red: '#EA411D',
        salmon: '#FC9985',
        peach: '#FFB9AA',
        // Purplish colors decreasing intensity
        purpleBubble: '#BDA0CB',
        cozyPurple: '#8E2DE2',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        cozy: ['Georgia', 'serif'], // Example of a cozy font
      },
    },
  },
  plugins: [],
}


