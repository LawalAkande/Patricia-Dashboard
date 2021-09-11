
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      amazon_bg: "#FEA202",
      blue_main: "#2A69AF",
      grey_grey: "#F9FAFC",
      grey_grey_1: "#444854",
      grey_grey_3: "#9DA8B6",
      grey_grey_8: "#EFF2F7",
      grey_grey_9: "#F9FAFC",
      grey_300: "#575A65",
      grey_new: "#979AA5",
      pastel_1: "#DEF5F2",
      primary_main: "#006156",
      raisin_black_main: "#1D1E2C",
      red_main: "#CC4945",
      secondary_faint: "#FFEEA7",
      secondary_main: "#FFCE00",
      white: "#FFFFFF",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
