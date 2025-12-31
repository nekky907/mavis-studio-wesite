import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F4045',
          light: '#2A5359',
        },
        secondary: {
          DEFAULT: '#D0AE8A',
          light: '#E5C9A6',
        },
        tertiary: {
          DEFAULT: '#EDE5D3',
          light: '#F5F0E8',
        },
        accent: {
          DEFAULT: '#7F9492',
          light: '#9BB0AE',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
