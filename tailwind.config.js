const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        'light-purple': colors.lightpurple,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        amber: colors.amber,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.yellow,
        code: {
          punctuation: '#A1E8FF',
          tag: '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          string: '#A2F679',
          highlight: 'rgba(134, 239, 172, 0.25)',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
        // "fade-in": {
        //   "0%": {
        //     opacity: "0"
        //   },
        //   to: {
        //     opacity: "1"
        //   }
        // }
      },
      animation: {
        // "fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        fadeIn: "fadeIn 2s ease-in forwards",
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
// https://onesheep.org/insights/animate-on-scroll-with-tailwind-css
      //tailwind.config.js 
      //FreeBSD-licensed CSS animation by Animista 

      transitionDuration: {
        DEFAULT: '150ms',
        // ...
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // ...
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      spacing: {
        7: '1.75rem',
      },
    },
  },

  variants: {
    backgroudColor:['responsive',  'hover','focus','active'],
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
  },


  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut'],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
    require('@tailwindcss/forms'),
  ],
}