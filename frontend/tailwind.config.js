/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-navy': '#0f172a', // Add your custom navy color here
      },
    },
  },
  plugins: [],
}
