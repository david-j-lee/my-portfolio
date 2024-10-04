const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      lightest: colors.neutral['100'],
      light: colors.neutral['200'],
      dim: colors.neutral['400'],
      dimmer: colors.neutral['500'],
      dark: colors.neutral['800'],
      darkest: colors.neutral['900'],
    },
  },
  plugins: [],
  darkMode: "selector"
};
