const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      'photo-spin': 'photo-spin 2s 1 linear forwards',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      'photo-spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        caps: '.12em',
      },
      fontSize: {
        '8.5xl': '7rem',
      },
      fontFamily: {
        // Headlines: a contemporary text serif, not a period face.
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        // Everything else reads in one neutral sans.
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // One cool neutral ramp: 50-300 are grounds and rules in light mode,
        // 600-900 are grounds and rules in dark mode, 400-800 carry text.
        slate: {
          50: '#f7f8f9',
          100: '#eff1f3',
          200: '#e3e6ea',
          300: '#cfd4da',
          400: '#79818b',
          500: '#5c646e',
          600: '#39414a',
          700: '#2b3037',
          800: '#1a1d21',
          900: '#15181b',
        },
        // Muted indigo — links, active states, the occasional rule.
        primary: {
          50: '#f1f3f9',
          100: '#e1e6f2',
          200: '#c3cce4',
          300: '#93a3cb',
          400: '#6b7fb5',
          500: '#4a5f98',
          600: '#3b4c7a',
          700: '#2f3d62',
          800: '#253150',
          900: '#1b2440',
        },
        gray: {
          50: '#f7f8f9',
          100: '#eff1f3',
          200: '#e3e6ea',
          300: '#cfd4da',
          400: '#79818b',
          500: '#5c646e',
          600: '#39414a',
          700: '#2b3037',
          800: '#1a1d21',
          900: '#15181b',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            a: {
              color: theme('colors.primary.600'),
              fontWeight: '400',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              textDecorationColor: theme('colors.primary.200'),
              '&:hover': {
                color: `${theme('colors.primary.700')} !important`,
                textDecorationColor: theme('colors.primary.500'),
              },
              code: { color: theme('colors.primary.600') },
            },
            h1: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              letterSpacing: '-0.015em',
              color: theme('colors.slate.800'),
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              letterSpacing: '-0.015em',
              color: theme('colors.slate.800'),
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              color: theme('colors.slate.800'),
            },
            'h4,h5,h6': {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              color: theme('colors.slate.800'),
            },
            pre: {
              backgroundColor: theme('colors.slate.900'),
              border: `1px solid ${theme('colors.slate.700')}`,
              borderRadius: '4px',
              fontSize: '0.9rem',
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.primary.700'),
              backgroundColor: theme('colors.slate.100'),
              border: `1px solid ${theme('colors.slate.200')}`,
              fontWeight: '400',
              fontSize: '0.875em',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '3px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.slate.100'),
              border: `1px solid ${theme('colors.slate.200')}`,
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '4px',
              paddingBottom: '4px',
              borderRadius: '3px',
            },
            hr: { borderColor: theme('colors.slate.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.slate.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.slate.400'),
            },
            strong: { color: theme('colors.slate.800'), fontWeight: '600' },
            img: {
              border: `1px solid ${theme('colors.slate.200')}`,
              borderRadius: '4px',
            },
            figcaption: {
              color: theme('colors.slate.500'),
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              color: theme('colors.slate.600'),
              borderLeftWidth: '2px',
              borderLeftColor: theme('colors.primary.400'),
            },
            table: {
              fontSize: '0.95rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.primary.300'),
              textDecorationColor: theme('colors.primary.800'),
              '&:hover': {
                color: `${theme('colors.primary.200')} !important`,
                textDecorationColor: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.300') },
            },
            h1: { color: theme('colors.slate.100') },
            h2: { color: theme('colors.slate.100') },
            h3: { color: theme('colors.slate.100') },
            'h4,h5,h6': { color: theme('colors.slate.100') },
            pre: {
              backgroundColor: '#101317',
              borderColor: theme('colors.slate.700'),
            },
            code: {
              color: theme('colors.primary.200'),
              backgroundColor: theme('colors.slate.800'),
              borderColor: theme('colors.slate.700'),
            },
            details: {
              backgroundColor: theme('colors.slate.800'),
              borderColor: theme('colors.slate.700'),
            },
            hr: { borderColor: theme('colors.slate.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.slate.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.slate.400'),
            },
            strong: { color: theme('colors.slate.100') },
            img: {
              borderColor: theme('colors.slate.700'),
            },
            figcaption: {
              color: theme('colors.slate.400'),
            },
            thead: {
              th: {
                color: theme('colors.slate.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.slate.700'),
              },
            },
            blockquote: {
              color: theme('colors.slate.200'),
              borderLeftColor: theme('colors.primary.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
}
