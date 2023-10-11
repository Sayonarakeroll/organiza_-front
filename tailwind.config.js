/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-navbar': '#053B50',
      'main': '#EEEEEE',
      'gray-footer': '#565757',
      'cards': '#D9D9D9',
      'red': '#FF0000',
      'editar':'#64CCC5'
    }
    ,
    fontFamily: {
      'mukta': ['Mukta', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-white': {
          color: '#fff', // Define a cor do texto como branco (#fff).
          '.text-red': {
            color: '#FF0000', // Define a cor do texto como branco (#fff).
        },
      },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
