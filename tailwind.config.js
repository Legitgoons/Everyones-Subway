module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-green': '#5ACE6F',
      },
      fontFamily: {
        'suit': ['SUIT', 'sans-serif'],
        'jalnan': ['JALNAN', 'sans-serif'],
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
      },
      lineHeight: {
        '120': '120%',
        '130': '130%',
        '140': '140%',
      },
      fontWeight: {
        'normal': 400,
        'semibold': 600,
      },
    },
  },
  plugins: [],
}