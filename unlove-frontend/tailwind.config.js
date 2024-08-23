/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FAD02E',
        softOrange: '#F9AFAE',
        purpleBubble: '#BDA0CB',
        cozyPurple: '#8E2DE2', // You can add more colors here
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        cozy: ['Georgia', 'serif'], // Example of a cozy font
      },
    },
  },
  plugins: [],
}


