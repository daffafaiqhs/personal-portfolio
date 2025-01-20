/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      'sm-md': '426px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'brand-orange': '#FF933F',
        'brand-yellow': '#FEDC7E',
      },
      fontSize: {
        'xs': ['0.8rem', '1.25rem'],
        '4.5xl': ['2.6rem', '1'],
      },
      width: {
        'sm-md': '415px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
