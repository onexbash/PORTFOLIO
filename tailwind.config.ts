import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        rosewater_color: 'var(--rosewater_color)',
        flamingo_color: 'var(--flamingo_color)',
        pink_color: 'var(--pink_color)',
        mauve_color: 'var(--mauve_color)',
        red_color: 'var(--red_color)',
        maroon_color: 'var(--maroon_color)',
        peach_color: 'var(--peach_color)',
        yellow_color: 'var(--yellow_color)',
        green_color: 'var(--green_color)',
        teal_color: 'var(--teal_color)',
        sky_color: 'var(--sky_color)',
        sapphire_color: 'var(--sapphire_color)',
        blue_color: 'var(--blue_color)',
        lavendar_color: 'var(--lavendar_color)',
        text_color: 'var(--text_color)',
        subtext1_color: 'var(--subtext1_color)',
        subtext0_color: 'var(--subtext0_color)',
        overlay2_color: 'var(--overlay2_color)',
        overlay1_color: 'var(--overlay1_color)',
        overlay0_color: 'var(--overlay0_color)',
        surface2_color: 'var(--surface2_color)',
        surface1_color: 'var(--surface1_color)',
        surface0_color: 'var(--surface0_color)',
        base_color: 'var(--base_color)',
        mantle_color: 'var(--mantle_color)',
        crust_color: 'var(--crust_color)',
        brightpink_color: 'var(--brightpink_color)',
        brightcyan_color: 'var(--brightcyan_color)',
        cat_white: 'var(--cat_white)',

        text: 'var(--text)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@catppuccin/tailwindcss')({
      prefix: 'one',
      defaultFlavour: 'mocha',
    }),
  ],
} satisfies Config;

export default config;
