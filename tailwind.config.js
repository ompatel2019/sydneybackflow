/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['ClashGrotesk-Regular', 'ClashGrotesk-Medium', 'ClashGrotesk-Semibold', 'ClashGrotesk-Bold', 'sans-serif'],
      },
      colors: {
        'c-1': ['#2459b7'],
        'c-2': ['#142855'],
        'c-3': ['#f0f0f0'],
        'c-5': ['#2A2A2A']
      }
    },
  },
  plugins: [],
}
