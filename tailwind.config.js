/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sanskritLike: ['Georgia', 'serif'],
      },
      colors: {
        'custom-orange': {
          50: '#FFF5F0',
          100: '#FFEBD9',
          200: '#FFD0B5',
          300: '#FFA278',
          400: '#FF7D4F',
          500: '#CC4522', // Main temple color
          600: '#B33D1E',
          700: '#8A2E17',
          800: '#6B240F',
          900: '#4D1A0B',
        },
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 2s infinite',
      },
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};