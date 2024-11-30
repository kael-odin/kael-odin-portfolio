/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primarytext":"#ffffe3",
        "bgreen":"#0fe149",
        "accentv":"#a076fe",
        "bline":"#444c44"
      }
    },
  },
  plugins: [],
}