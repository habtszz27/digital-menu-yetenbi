/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#fff9db',
          300: '#fcd34d',
          400: '#fbbf24',
        },
      },
    },
  },
  plugins: [],
}
