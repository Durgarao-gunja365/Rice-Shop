/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeUpDelay: 'fadeUp 1s ease-out 0.5s forwards',
        fadeUpDelay2: 'fadeUp 1s ease-out 1s forwards',
      },
    },
    },

  plugins: [],
}