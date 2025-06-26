
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EC6435',
        dark: '#1D1D1B',
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
      },
    },
  },
  plugins: [],
}
