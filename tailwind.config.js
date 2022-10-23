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
      'green2': 'linear-gradient(78deg, rgba(2,0,36,1) 0%, rgba(55,209,154,1) 0%, rgba(0,212,255,1) 100%)'
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      }
    },
  },
  plugins: [],
}
