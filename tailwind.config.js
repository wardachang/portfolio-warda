/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        navy: '#0A0E17',
        surface: '#121826',
        surface2: '#1A2233',
        accent: '#6C63FF',
        muted: '#9CA3AF',
      },
    },
  },
  plugins: [],
};
