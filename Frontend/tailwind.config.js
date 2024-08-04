/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'customImage':"url('https://i1.wp.com/techinnov.ca/wp-content/uploads/2020/04/gif-phone-1.gif?w=1080&ssl=1')"
      }
    },
  },
  plugins: [],
}