module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff7f3',
      red: '#aa381e',
      tan: '#ba8474',
      olive: '#ede9d0',
      gray: '#999999',
      darkergray: '#666666',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}