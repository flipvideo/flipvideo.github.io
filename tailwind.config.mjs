/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#FFC7C7',
          blush: '#FFE2E2',
          canvas: '#F6F6F6',
          slate: '#8785A2',
        },
        page: 'var(--bg-page)',
        card: 'var(--bg-card)',
        subtle: 'var(--bg-subtle)',
        'accent-primary': 'var(--accent-primary)',
        'accent-slate': 'var(--accent-slate)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border-token': 'var(--border)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      transitionTimingFunction: {
        'gpu-smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
