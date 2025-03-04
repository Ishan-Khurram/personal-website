import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#E0E1DD', // basically white, main color for text
        400: '#A6A9AA', // platinum color, secondary color for text
        500: '#5DA9E9', // blueish color 
        600: '#A8A8A8',
      },
      grayscale: {
        1: '#252A2E', // lifted
        25: '#E4E2DD', // beige
        50: '#1E1E1E', // background
        100: '#252A2E', // lighter black
        200: '#FDFDFF',
        950: '#823A5D',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
