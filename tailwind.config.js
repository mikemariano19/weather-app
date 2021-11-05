module.exports = {
  mode:'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: [
        twitter = '#1DA1F2'
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
