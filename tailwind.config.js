/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1F2C', // Deep Navy
          light: '#2A3142',
          dark: '#12161F'
        },
        accent: {
          DEFAULT: '#FF4B4B', // Energetic Red
          light: '#FF7171',
          dark: '#E63939'
        },
        surface: {
          DEFAULT: '#F7F8FA', // Clean White
          light: '#FFFFFF',
          dark: '#E8EAF0'
        },
        energy: {
          DEFAULT: '#00E1B9', // Electric Teal
          light: '#33FFD6',
          dark: '#00B394'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        display: ['Audiowide', 'cursive']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 1.5s infinite',
        'equalizer': 'equalizer 1.4s ease-in-out infinite'
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(1.0)' },
          '50%': { transform: 'scaleY(0.5)' },
        },
        equalizer: {
          '0%, 100%': { height: '0.75rem' },
          '50%': { height: '2rem' },
        }
      }
    },
  },
  plugins: [],
};