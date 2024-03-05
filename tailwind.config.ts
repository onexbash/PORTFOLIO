import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* determing variables from globals.css */
        primary_bg: 'var(--primary_bg)',
        primary_fg: 'var(--primary_fg)',
        secondary_bg: 'var(--secondary_bg)',
        secondary_fg: 'var(--secondary_fg)',
        highlight_fg: 'var(--highlight_fg)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        accent_fg: 'var(--accent_fg)',

        /* shadcn variables */
        background: 'var(--primary_bg)',
        foreground: 'var(--primary_fg)',
        text: 'var(--primary_fg)',
        primary: {
          DEFAULT: 'var(--primary_bg)',
          foreground: 'var(--primary_fg)',
        },
        secondary: {
          DEFAULT: 'var(--secondary_bg)',
          foreground: 'var(--secondary_fg)',
        },
        gradient: 'var(--accent1)',
        border: 'var(--accent3)',
        input: 'var(--accent2)',
        ring: 'var(--accent3)',
        destructive: {
          DEFAULT: 'var(--secondary_bg)',
          foreground: 'var(--secondary_fg)',
        },
        muted: {
          DEFAULT: 'var(--secondary_bg)',
          foreground: 'var(--secondary_fg)',
        },
        accent: {
          DEFAULT: 'var(--accent1)',
          foreground: 'var(--primary_fg)',
        },
        popover: {
          DEFAULT: 'var(--secondary_bg)',
          foreground: 'var(--secondary_fg)',
        },
        card: {
          DEFAULT: 'var(--secondary_bg)',
          foreground: 'var(--secondary_fg)',
        },
        radius: {
          DEFAULT: 'var(--radius1)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',

        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
