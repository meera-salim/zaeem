/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      fontSize: {
     'text-3xl': '2rem',
      },

      
      colors:{
        primary:'#143164',
        secondary:'#206FC9',
        yellow: '#FFBB12',
        orange:{
          10:'#FFF0E9',
          100:'#FF6A1F',
        },
        ivory:'#FFF4DE',
        darkGray : '#424242',

      

        gray:{
          90:'#656F78',
          70:'#8C9AA5',
          50:'#BFC7CD',
          30:'#D9DFE4',
          10:'#ECF0F4'
        },
        white:'#FFFFFF',


        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12, 88%,69%)',
        brightRedSupLight:'hsl(12, 88%,95%)',
        darkGrayishBlue:'hsl(227, 12%,61%)',
        veryDarkBlue:'hsl(223, 12%,13%)',
        veryPaleRed:'hsl(13, 100%,96%)',
        veryLightGray:'hsl(0, 0%,98%)',
        lightGray300:'#d1d5db',
        lightGray200:'#e5e7eb',
        lightGray100:'#f3f4f6'

      },
      screens: {
      'sm': '320px',
      'md': '481px',
      'lg': '769px',
      'xl': '1025px',
      '2xl':'1201px',
      },
      // colors:{
      //   primary:'#FF6363',
      // secondary:{
      //   100:'#E2E2D5',
      //   200:'#888883'
      // },
      //   brightRed:'hsl(12,88%,59%)',
      //   brightRedLight:'hsl(12, 88%,69%)',
      //   brightRedSupLight:'hsl(12, 88%,95%)',
      //   darkGrayishBlue:'hsl(227, 12%,61%)',
      //   veryDarkBlue:'hsl(223, 12%,13%)',
      //   veryPaleRed:'hsl(13, 100%,96%)',
      //   veryLightGray:'hsl(0, 0%,98%)',
      //   lightGray300:'#d1d5db',
      //   lightGray200:'#e5e7eb',
      //   lightGray100:'#f3f4f6'
      // },
      fontFamily:{
      noto:"'Noto-Sans', Inter"
      }

    
    },
  },
  plugins: [],
}

