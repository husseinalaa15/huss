/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const patterns = require("tailwind-heropatterns")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  patterns:[
    "polka-dots", "signal"
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      'primary':'#161b22',
      'secondary':'#111419',
      'text-primary':'#c9d1d9',
      'text-secondary':'#6B4B24',
      'btn-hoverd':'#a97332'
    },
    screens: {
      'xs': '370px',
      ...defaultTheme.screens,
    },

    extend: {
      animation:{
        blob:"blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%":{transform:"translate(0px,0px) scale(1)"},
          "33%":{transform:"translate(30px,-50px) scale(1.2)"},
          "66%":{transform:"translate(-20px,20px) scale(0.8)"},
          "100%":{transform:"translate(0px,0px) scale(1)"},

        }
      }
    },
  },
  darkMode:'class',
  plugins: [],
}
