/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EC6435',
          light: '#EF773A',
          dark: '#D45328',
        },
        dark: {
          DEFAULT: '#1D1D1B',
          light: '#2A2A28',
          lighter: '#3A3A38',
        },
        light: {
          DEFAULT: '#F8FAFC',
          dark: '#E2E8F0',
          darker: '#CBD5E1',
        },
        accent: '#EF773A',
        magicpurple: '#7e5bef',
      },
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '1' },
          '50%': { transform: 'translateY(200%)', opacity: '0.5' },
        },
        themeSwitch: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      animation: {
        underline: 'underline 0.3s ease-out forwards',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s infinite',
        scroll: 'scroll 1.5s infinite',
        themeSwitch: 'themeSwitch 0.6s ease-out',
      },
    },
  },
  plugins: [],
}