module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        'e-white': '#f2f0e5',
        'e-black': '#212123',
        'e-green': '#c2d368',
        'e-rock': '#646365',
        'e-scissors': '#cf8acb',
        'e-paper': '#d3a068',
      },
      fontFamily: {
        sono: ['Sono', 'sans-serif'],
      },
    },
  },
};
