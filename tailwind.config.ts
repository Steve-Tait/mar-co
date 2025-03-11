import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    'btn--sm',
    'theme--light',
    'theme--dark',
    'theme--muted',
    'theme--alternate',
  ],
  theme: {
    fontFamily: {
      heading: ['var(--font-poppins)'],
      body: ['var(--font-open-sans)'],
      serif: ['serif'],
      mono: ['monospace'],
    },
    colors: {
      inherit: 'inherit',
      current: 'current',
      pink: {
        DEFAULT: '#FF5757',
        900: '#880000',
        700: '#d30000',
        500: '#5e17eb',
        300: '#ff6969',
        100: '#c48cf7',
        50: '#f8f5fe',
      },
      purple: {
        DEFAULT: '#380E8D',
        900: '#270965',
        700: '#420fa9',
        500: '#5e17eb',
        300: '#9262f1',
        100: '#c48cf7',
        50: '#f8f5fe',
      },
      black: {
        DEFAULT: '#131313',
      },
      white: '#FFFFFF',
      grey: '#868686',
      transparent: 'transparent',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      highlight: 'hsl(var(--highlight))',
      eyebrow: 'hsl(var(--eyebrow))',
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
      'secondary-muted': {
        DEFAULT: 'hsl(var(--secondary-muted))',
        foreground: 'hsl(var(--secondary-muted-foreground))',
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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      zIndex: {
        1: '1',
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
      },
      padding: {
        18: '4.5rem',
      },
      width: {
        'calc-content': 'calc-size(max-content, size)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '900',
            },
            h2: {
              fontWeight: '800',
            },
            h3: {
              fontWeight: '800',
            },
            h4: {
              fontWeight: '800',
            },
            h5: {
              fontWeight: '800',
            },
            h6: {
              fontWeight: '800',
            },
          },
        },
        lg: {
          css: {
            lineHeight: '1.5',
          },
        },
        xl: {
          css: {
            lineHeight: '1.5',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
