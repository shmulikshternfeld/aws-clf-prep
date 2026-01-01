/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aws: {
          dark: '#232f3e',
          light: '#ff9900',
          hover: '#ec7211',
          blue: '#007eb9',
        }
      }
    },
  },
  plugins: [],
}
