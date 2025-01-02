

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        register: "#f6f3ef"
      }
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}