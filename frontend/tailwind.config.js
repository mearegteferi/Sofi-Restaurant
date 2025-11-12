/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raising-black': '#222831',
        'gold': '#ffbe33',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
