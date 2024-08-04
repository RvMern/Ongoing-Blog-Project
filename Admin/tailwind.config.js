/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'custom-w-25':'15%'
      },
      margin:{
        'custom-ml-15':'0 0 0 15%'
      },
    
    },
  },
  plugins: [],
}