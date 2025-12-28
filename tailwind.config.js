/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A0E0E',
        secondary: '#8B1538',
        accent: '#D4AF37',
        background: '#2C0A0A',
        'text-cream': '#F5E6D3',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F8E08E 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
}
