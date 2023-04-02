/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '560': '560px'
      },
      colors: {
        ' dark-cyan': '#002f34',
        'sell': '#002f34',
        'top_': '#23e5db',
        'left_': '#ffce32',
        'right_': '#3a77ff',
       'border': '#002f34',
       'gre':'#002f34'
      }
    },
  },
  plugins: [],
}
