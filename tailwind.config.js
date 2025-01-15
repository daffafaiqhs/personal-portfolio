/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
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
        // '4xl-custom': ['2.6rem', '1'],

        'title-sm': 'clamp(0.8rem, 13vw, 4rem)',
        'subtitle-sm': 'clamp(0.1rem, 0.75rem, 5rem)',
        'brand-sm': 'calc(5vw + 3vh)',
        'subtitle-md': 'clamp(.6rem, 1.8vw, 1.2rem)',
        'title-2xl': 'clamp(8rem, calc(8vw + 2vh), 10rem)',
      },
      width: {
        '2xl': '1536px',

        'title-sm': 'clamp(.5rem, 6vw, 1.9rem)',
        'title-md': 'clamp(1.5rem, 5vw, 4.5rem)',
        'img-md': 'clamp(28rem, 10vw, 4.5rem)',
      },
      aspectRatio: {
        '6/9': '6 / 9',
      },
      padding: {
        'width-responsive': 'clamp(.2rem, 3vw, 2rem)',
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}
