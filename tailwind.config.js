/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // EDIT THIS SECTION TO UPDATE OFFICIAL MATAF TI 2026 COLOR PALETTE
        navy: {
          950: '#070B14',
          900: '#0B1120',
          800: '#121B30',
          700: '#1C2842',
        },
        trail: {
          DEFAULT: '#3B82F6', // primary blue accent
          light: '#60A5FA',
        },
        amber: {
          DEFAULT: '#F5A623', // signature "journey" accent
          light: '#FBC55C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,0.45)',
      },
    },
  },
  plugins: [],
}
