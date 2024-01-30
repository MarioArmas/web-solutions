/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image': "url('/src/assets/bg-image.jpg')"
      }
    },
  },
  plugins: [],
}

