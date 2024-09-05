import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-graphik)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              50: '#e4e5ff',
              100: '#b3b3ff',
              200: '#8180fd',
              300: '#504efc',
              400: '#231dfb',
              500: '#1105e2',
              600: '#0a02b0',
              700: '#04017e',
              800: '#00004d',
              900: '#00001d',
              DEFAULT: '#00004d',
            },
            secondary: {
              50: '#ffe5f3',
              100: '#f9bad7',
              200: '#f18fba',
              300: '#e9629f',
              400: '#e23783',
              500: '#c81d6a',
              600: '#9d1552',
              700: '#710c3b',
              800: '#460523',
              900: '#1d000e',
              DEFAULT: '#e23783',
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        modern: {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff',
            },
            focus: '#F182F6',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
export default config;
