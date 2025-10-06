/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#8B1538',
          dark: '#6B0F2A',
          light: '#FFF5F7',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#1A1A1A',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.1)',
        'card': '0 4px 6px rgba(0,0,0,0.07)',
        'hover': '0 10px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
