/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'darker-cream-1' : "#E4E2DC",
        'cream' : '#ebe3d1'
      },
      fontFamily: {
        'overpass': ['Overpass'],
      }
    },
  },
  plugins: [],
}
