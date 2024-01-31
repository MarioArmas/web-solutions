/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image': "url('/public/assets/bg-image.jpg')"
      }
    },
  },
  plugins: [],
}

