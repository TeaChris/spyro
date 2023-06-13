/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/images/header.jpeg)",
      },
      colors: {
        colorBG: '#18171a',
        colorOrange: '#ff4300',
        colorOrangeDark: '#ff6400',
      },
      width: {
        sm: '90%',
        md: '88%',
        lg: '80%',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
      },
    },
    plugins: [],
  },
}
