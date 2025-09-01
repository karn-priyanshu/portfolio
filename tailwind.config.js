/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cosmic-blue': '#1e293b',
        'deep-space': '#0f172a',
        'void-black': '#000000',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #3B82F6, 0 0 10px #3B82F6, 0 0 15px #3B82F6' },
          '100%': { boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
};