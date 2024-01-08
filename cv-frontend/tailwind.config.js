/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
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
    }
  },
  plugins: [],
}

