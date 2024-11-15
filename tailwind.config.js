/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Satoshi Fonts
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'],
        
        // Clash Grotesk Fonts
        'clash-light': ['ClashGrotesk-Light', 'sans-serif'],
        'clash': ['ClashGrotesk-Regular', 'sans-serif'],
        'clash-medium': ['ClashGrotesk-Medium', 'sans-serif'],
        'clash-semibold': ['ClashGrotesk-Semibold', 'sans-serif'],
        'clash-bold': ['ClashGrotesk-Bold', 'sans-serif'],
        'clash-extralight': ['ClashGrotesk-Extralight', 'sans-serif'],
        'clash-variable': ['ClashGrotesk-Variable', 'sans-serif'], // If using variable fonts
      },
      colors: {
        'c-1': ['#2459b7'],
        'c-2': ['#142855'],
        'c-3': ['#f0f0f0'],
        'c-4': ['#2A2A2A']
      }
    },
  },
  plugins: [],
}
