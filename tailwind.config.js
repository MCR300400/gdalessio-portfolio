/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          warm: '#F5F3EF',
          card: '#FFFFFF',
          pure: '#FFFFFF',
          subtle: '#F7F5F0',
        },
        charcoal: {
          DEFAULT: '#1A1918',
          deep: '#141312',
          muted: '#5C5853',
          faint: '#8A857D',
          light: '#AEA9A2',
        },
        editorial: {
          border: '#E6E1DA',
          borderDark: '#D6CFC4',
          terracotta: '#B76E59',
          'terracotta-light': '#FAF2F0',
          wine: '#6B3E48',
          'wine-light': '#F6EFF1',
          sage: '#7A8471',
          'sage-light': '#F1F4F0',
          sand: '#ECE8E1',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
      },
      fontSize: {
        '2xs': '0.6875rem', // 11px
        'display-2xl': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(26, 25, 24, 0.04), 0 2px 6px -1px rgba(26, 25, 24, 0.02)',
        'editorial-hover': '0 12px 32px -4px rgba(26, 25, 24, 0.08), 0 4px 12px -2px rgba(26, 25, 24, 0.03)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
