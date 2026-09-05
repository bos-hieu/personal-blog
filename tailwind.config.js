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
        caps: '.18em',
      },
      fontSize: {
        '8.5xl': '7rem',
      },
      fontFamily: {
        // Headlines: a letterpress-era transitional serif.
        display: ['"Libre Baskerville"', 'Georgia', '"Times New Roman"', 'serif'],
        // Running text: a warm old-style serif that reads long-form well.
        serif: ['"EB Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Aged paper, from the freshest sheet to the most foxed.
        paper: {
          DEFAULT: '#fbf7ed',
          50: '#fefdf9',
          100: '#faf6ea',
          200: '#f3ecda',
          300: '#eae0c8',
          400: '#ddd0b2',
          500: '#c9b894',
        },
        // Iron-gall ink, thinned down for secondary text.
        ink: {
          DEFAULT: '#211e18',
          900: '#14120e',
          800: '#211e18',
          700: '#332e25',
          600: '#4c453a',
          500: '#6b6355',
          400: '#8b8271',
          300: '#a89e8b',
        },
        // Oxblood — the accent used on rules, links and marginalia.
        primary: {
          50: '#fbf3f0',
          100: '#f5e2dc',
          200: '#e9c4b8',
          300: '#d79f8d',
          400: '#c2755f',
          500: '#a8452f',
          600: '#8c3323',
          700: '#70281c',
          800: '#551f16',
          900: '#3b1610',
        },
        // Tarnished brass, for ornaments and small flourishes.
        brass: {
          300: '#d9bd7f',
          400: '#c3a05a',
          500: '#a9803a',
          600: '#8a672c',
        },
        gray: {
          50: '#faf9f7',
          100: '#f3f1ec',
          200: '#e7e3da',
          300: '#d3cdc0',
          400: '#a89e8b',
          500: '#8b8271',
          600: '#6b6355',
          700: '#4c453a',
          800: '#332e25',
          900: '#211e18',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.700'),
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.75',
            a: {
              color: theme('colors.primary.600'),
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
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.ink.800'),
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.ink.800'),
              paddingBottom: '0.3em',
              borderBottom: `1px solid ${theme('colors.paper.400')}`,
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '700',
              color: theme('colors.ink.800'),
            },
            'h4,h5,h6': {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.ink.800'),
            },
            pre: {
              backgroundColor: theme('colors.ink.900'),
              border: `1px solid ${theme('colors.ink.700')}`,
              borderRadius: '2px',
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.primary.700'),
              backgroundColor: theme('colors.paper.200'),
              border: `1px solid ${theme('colors.paper.400')}`,
              fontWeight: '400',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '2px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.paper.200'),
              border: `1px solid ${theme('colors.paper.400')}`,
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '4px',
              paddingBottom: '4px',
              borderRadius: '2px',
            },
            hr: { borderColor: theme('colors.paper.400') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.ink.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.ink.500'),
            },
            strong: { color: theme('colors.ink.800') },
            img: {
              border: `1px solid ${theme('colors.paper.400')}`,
              borderRadius: '2px',
            },
            figcaption: {
              fontStyle: 'italic',
              color: theme('colors.ink.500'),
            },
            blockquote: {
              fontStyle: 'italic',
              color: theme('colors.ink.600'),
              borderLeftWidth: '2px',
              borderLeftColor: theme('colors.primary.500'),
            },
            table: {
              fontSize: '1rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.paper.300'),
            a: {
              color: theme('colors.primary.300'),
              textDecorationColor: theme('colors.primary.700'),
              '&:hover': {
                color: `${theme('colors.primary.200')} !important`,
                textDecorationColor: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.300') },
            },
            h1: {
              color: theme('colors.paper.100'),
            },
            h2: {
              color: theme('colors.paper.100'),
              borderBottomColor: theme('colors.ink.600'),
            },
            h3: {
              color: theme('colors.paper.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.paper.100'),
            },
            pre: {
              backgroundColor: '#100e0b',
              borderColor: theme('colors.ink.700'),
            },
            code: {
              color: theme('colors.primary.200'),
              backgroundColor: theme('colors.ink.800'),
              borderColor: theme('colors.ink.600'),
            },
            details: {
              backgroundColor: theme('colors.ink.800'),
              borderColor: theme('colors.ink.600'),
            },
            hr: { borderColor: theme('colors.ink.600') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.paper.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.paper.500'),
            },
            strong: { color: theme('colors.paper.100') },
            img: {
              borderColor: theme('colors.ink.600'),
            },
            figcaption: {
              color: theme('colors.paper.500'),
            },
            thead: {
              th: {
                color: theme('colors.paper.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.ink.700'),
              },
            },
            blockquote: {
              color: theme('colors.paper.200'),
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
