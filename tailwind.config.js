/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',
      secondary:{
        100:'#E2E2D5',
        200:'#888883'
      },
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
      fontFamily:{
      noto:"'Noto-Sans', Inter"
      }
    },
  },
  plugins: [],
}

