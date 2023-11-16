/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      translate: ['group-hover'],
      opacity: ['group-hover'],
      fontFamily: {
        'stencil': ['stencil-std-bold', 'sans'],
      },
    },
  },
  plugins: [],
}

