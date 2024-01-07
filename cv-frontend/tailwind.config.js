/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      header: '#363844',
      border: '#D1C5AB',
      light: '#F5F5F5',
    },
    fontFamily: {
      primary: ['Lato', 'Outfit', 'Tilt Prism', 'sans-serif'],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0.5vw': '0.5vw',
      '1.5vw': '1.5vw' ,
    },
    extend: {
      rotate: {
        '120': '120deg',
        '240': '240deg',
      }
    },
  },
  plugins: [],
}

