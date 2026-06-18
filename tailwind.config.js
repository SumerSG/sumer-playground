/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"VT323"', '"Courier New"', 'monospace'],
        retro: ['"Courier New"', 'monospace'],
      },
      colors: {
        y2k: {
          black: '#000000',
          darkblue: '#000033',
          pink: '#FF00FF',
          cyan: '#00FFFF',
          lime: '#00FF00',
          yellow: '#FFFF00',
          orange: '#FF9900',
          red: '#FF0000',
          purple: '#9900FF',
          white: '#FFFFFF',
          gray: '#888888',
        },
        primary: '#00FFFF',
        accent: '#FF00FF',
        muted: '#888888',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF',
        'neon-pink': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 20px #FF00FF',
        'neon-lime': '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
        'neon-yellow': '0 0 5px #FFFF00, 0 0 10px #FFFF00, 0 0 20px #FFFF00',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'rainbow': 'rainbow 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        rainbow: {
          '0%': { color: '#FF0000' },
          '17%': { color: '#FF9900' },
          '33%': { color: '#FFFF00' },
          '50%': { color: '#00FF00' },
          '67%': { color: '#00FFFF' },
          '83%': { color: '#9900FF' },
          '100%': { color: '#FF0000' },
        },
        'glow-pulse': {
          '0%': { textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF' },
          '100%': { textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
