import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        soul:   '#1C1810',
        gold:   '#C8A96E',
        linen:  '#F5F0E8',
        sea:    '#3D5A6C',
        sage:   '#8A9E8C',
        terra:  '#C8713A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem',   { lineHeight: '1.1', fontWeight: '300' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '300' }],
        'display-md': ['1.75rem',{ lineHeight: '1.3', fontWeight: '300' }],
        'label':      ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'body-lg':    ['1.0625rem',{ lineHeight: '1.7' }],
        'caption':    ['0.8125rem',{ lineHeight: '1.5' }],
        'cta':        ['0.875rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'prose-luxury': '65ch',
        'site': '1280px',
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(28, 24, 16, 0.06)',
        'card':   '0 8px 32px rgba(28, 24, 16, 0.10)',
        'deep':   '0 24px 64px rgba(28, 24, 16, 0.18)',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '600': '600ms',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(28,24,16,0.3) 0%, rgba(28,24,16,0.6) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
