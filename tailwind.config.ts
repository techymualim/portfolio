import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111111',
        'light-bg': '#ffffff',
        'glass': {
          'light': 'rgba(255, 255, 255, 0.1)',
          'dark': 'rgba(17, 17, 17, 0.6)',
        },
        'accent': {
          'primary': '#2563eb',    // Bright blue
          'deepBlue': '#1e3a8a',   // Deep blue
          'nightBlue': '#0f172a',  // Navy blue
          'lightBlue': '#60a5fa',  // Light blue for subtle accents
          'royalBlue': '#1d4ed8',  // Royal blue for interactive elements
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
        'gradient-dark': 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(17, 17, 17, 0.9))',
        'gradient-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
