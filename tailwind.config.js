/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          white: '#FFFFFF',
          soft: '#F8FAFC',
          ice: '#EAF5FF',
          lavender: '#F0EDFF',
        },
        brand: {
          blue: '#315EFF',
          navy: '#142A4C',
          violet: '#8064FF',
          cyan: '#45C6E8',
          coral: '#FF816E',
          orange: '#FFB45C',
          slate: '#334155',
          muted: '#64748B',
          lightgray: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(20, 42, 76, 0.04)',
        'card': '0 10px 30px -5px rgba(20, 42, 76, 0.07)',
        'card-hover': '0 20px 40px -10px rgba(49, 94, 255, 0.14)',
        'glass': '0 8px 32px 0 rgba(49, 94, 255, 0.08)',
        'glow-blue': '0 10px 30px -5px rgba(49, 94, 255, 0.35)',
        'glow-violet': '0 10px 30px -5px rgba(128, 100, 255, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
