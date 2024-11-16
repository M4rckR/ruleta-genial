/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{js,jsx}',
  ],
  theme: {

    fontSize: {
      'sm': ['14px', '18px'],    // Font size 14px, line-height 18px
      'base': ['16px', '20px'],   // Font size 16px, line-height 20px
      'lg': ['18px', '22px'],     // Font size 18px, line-height 22px
      'xl': ['20px', '24px'],     // Font size 20px, line-height 24px
      '2xl': ['24px', '28px'],    // Font size 24px, line-height 28px
      '3xl': ['32px', '36px'],    // Font size 30px, line-height 34px
      '4xl': ['36px', '40px'],    // Font size 36px, line-height 40px
      '5xl': ['48px', '52px'],    // Font size 48px, line-height 52px
      '6xl': ['64px', '68px'],    // Font size 64px, line-height 68px
    },

    container: {
      center: true,
      padding: '16px',
      screens : {
        DEFAULT: '1200px'
      }
    },

    extend: {
      colors: {
        'banbif-cyan' : '#20A6FF',
        'banbif-text' : '#004470',
        'banbif-border' : '##DEE2E6',
        'banbif-text-low' : 'rgba(0, 68, 112, 0.50);'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        'banbif-shadow': '0px 0px 20px 0px rgba(132, 132, 132, 0.25);'
      },

      borderRadius: {
        'banbif-radius-sm': '8px',
        'banbif-radius': '16px',
        'banbif-radius-lg': '22px',
      },

      backgroundImage : {
        'banbif-button-gradient': 'linear-gradient(98deg, #A281E5 0.01%, #8D4EF9 24.85%, #4764FF 70.51%, #1CA4FF 94.28%)'
      }


    },
  },
  plugins: [],
}

