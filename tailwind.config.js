const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'dark-logo':
          "url('./images/logo.png')",
        'white-logo':
          "url('./images/dark_logo.png')",
          'hero':
          "url('./images/hero.png')",
          'white-hero':
          "url('./images/white_hero.png')",
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      back:{1:'#050607'},
      ashs:{1:'#EFF3FB'},
      grad:{1:'#090B0E'},
      wBgText:{
        1:'#0D0D0D',
        2:'#171717',
    },
      oph_black:{1:'#0A0D11'},
      gold: {
        1: '#FFE5A1',
        2: '#BF841A',
        3: '#FFCD74',
      },
    },
  },
  plugins: [],
}
