/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'gm': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      '1lg': '1116px',

      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      '1xl': '1380px',

      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      '3xl':'1650px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  daisyui: {
    themes: [
      "light",
      
    ],
  },
  plugins: [require("daisyui")],
}