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
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
    }
  },
  plugins: [],
}