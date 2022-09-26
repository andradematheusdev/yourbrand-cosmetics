/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx","./pages/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  },
  ],
}
