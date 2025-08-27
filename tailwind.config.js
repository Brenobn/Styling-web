/** @type {import {'tailwindcss'}.Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '250px, 1fr',
      },
      colors: {
        breno: '#8257e6',
      },
    },
  },
  plugins: [],
}
