/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'esmeralda-dark': '#100404',
        'esmeralda-black': '#000000',
        'esmeralda-accent': '#2D2D2D',
        'esmeralda-light': '#E6F7EF',
        'esmeralda-gray': '#E8E4DF',
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
