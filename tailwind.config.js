/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'light-chocolate': '#e72237',
      },
    },
  },
  plugins: [require("daisyui")],
}

