/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // O theme fica vazio ou pode até ser removido, pois a customização agora está no CSS.
  theme: {
    extend: {},
  },
  plugins: [],
}
