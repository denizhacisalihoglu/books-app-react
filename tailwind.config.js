/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      violet: colors.violet,
      white: colors.white
    },
  },
  plugins: [],
}