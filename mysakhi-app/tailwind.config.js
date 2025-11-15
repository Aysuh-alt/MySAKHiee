/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sakhi-pink': '#FFB6C1',
        'sakhi-lavender': '#B39CD0',
        'sakhi-blue': '#A8DADC',
        'sakhi-gold': '#DAA520',
        'sakhi-text': '#333333',
        'sakhi-text-secondary': '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
