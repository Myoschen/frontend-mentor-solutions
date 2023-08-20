import {fontFamily} from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'grayish-blue': {
          100: 'hsl(240, 78%, 98%)',
          300: 'hsl(234, 14%, 74%)',
          500: 'hsl(233, 13%, 49%)',
          700: 'hsl(232, 13%, 33%)',
        },
      },
      fontFamily: {
        sans: ['Montserrat Variable', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
