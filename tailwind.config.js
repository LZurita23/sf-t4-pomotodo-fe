module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '720px',
      'md': '1024px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
