/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purpled': '#687b97',
      'purpled2': '#c3cad5',
      'green': '#37d19a',
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      }
    },
  },
  plugins: [],
}
