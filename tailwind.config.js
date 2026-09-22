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
          DEFAULT: '#F8F9FA',
          warm: '#F1F5F9',
          card: '#FFFFFF',
          pure: '#FFFFFF',
          subtle: '#F8FAFC',
        },
        charcoal: {
          DEFAULT: '#0F172A',
          deep: '#020617',
          muted: '#475569',
          faint: '#64748B',
          light: '#94A3B8',
        },
        editorial: {
          border: '#E2E8F0',
          borderDark: '#CBD5E1',
          terracotta: '#1D4ED8', // Diplomatic Blue accent
          'terracotta-light': '#EFF6FF',
          wine: '#1E3A8A',
          'wine-light': '#DBEAFE',
          sage: '#0D9488',
          'sage-light': '#F0FDFA',
          sand: '#E2E8F0',
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
        '2xs': '0.6875rem',
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
        'editorial': '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'editorial-hover': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
