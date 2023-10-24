
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   "mainColor": "#FF3811"
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
}