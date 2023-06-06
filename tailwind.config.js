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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: 'hsla(0, 97%, 63%, 1)',
        blue: {
          semi: 'hsla(223, 36%, 13%, 1)',
          dark: 'hsla(224, 30%, 9%, 1)',
          greyish: 'hsla(223, 23%, 46%, 1)',
        },
        white: 'hsla(0, 0%, 100%, 1)',
      },
    },
  },
  plugins: [],
};
