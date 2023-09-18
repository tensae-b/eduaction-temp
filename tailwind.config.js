/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
   
    colors: {
      'primary': {
        100:'rgb(var( --color-primary-price) )',
        200: 'rgb(var( --color-primary-lighter) )',
        300: 'rgb(var( --color-primary) )'
      },
      'secondary': 'rgb(var( --color-secondary) )',
      'third': 'rgb(var( --color-third) )',
      'price':'rgb(var(--color-price) )',
      'icon-red':'rgb(var(--color-icon-red) )',
      'icon-green':'rgb(var(--color-icon-green) )',
      'icon-purple':'rgb(var(--color-icon-purple) )',
      'icon-yellow':'rgb(var(--color-icon-yellow) )',
      'icon-blue':'rgb(var(--color-icon-blue) )',
      'icon-dark-green':'rgb(var(--color-icon-dark-green) )',
   
    },
   















  },
  plugins: [],
}

