import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', 'sans-serif'],
      },
      colors: {
        primary: {
          "50": "#ffedef",
          "100": "#ff94a0",
          "200": "#ff8290",
          "300": "#ff7080",
          "400": "#ff5e70",
          "500": "#ff4c60",
          "600": "#e64456",
          "700": "#cc3d4d",
          "800": "#b33543",
          "900": "#992e3a"
        },
        indigo: {
          "overlay": "rgba(99,102,241, 0.8)"
        }
      },
      animation: {
        'scroll': 'scroll 2s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
