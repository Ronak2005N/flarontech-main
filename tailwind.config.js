/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        forest: '#00412E',
        sage: '#96BF8A',
        teal: '#035A52',
        'dark-bg': '#010f0a',
        'dark-surface': '#021a12'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
