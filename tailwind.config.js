const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // see doc about purge: https://tailwindcss.com/docs/guides/nextjs
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '80p': '80%',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
