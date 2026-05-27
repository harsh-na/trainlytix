module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'brand-blue': '#0f172a'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 300ms ease-out both'
      }
    }
  },
  plugins: [
    // Optional Tailwind plugins. Keep config resilient in case deps aren't installed.
    (() => {
      try {
        return require('@tailwindcss/forms');
      } catch (e) {
        return null;
      }
    })(),
    (() => {
      try {
        return require('@tailwindcss/typography');
      } catch (e) {
        return null;
      }
    })(),
    (() => {
      try {
        return require('@tailwindcss/line-clamp');
      } catch (e) {
        return null;
      }
    })(),
  ].filter(Boolean)
};
