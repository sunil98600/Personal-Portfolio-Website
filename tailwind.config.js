/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('C:\Users\sunil\Desktop\REACT\portfolio\portfolio\src\assets\hero-1.jpg')",
      }
    },
  },
  plugins: [],
}

