module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#5ACE6F',
        p2: '#74d586',
        p3: '#8bde9a',
        p4: '#ace7b7',
        p5: '#d6f4dc',
        p6: '#effbf1',
        p7: '#f7fdf9',

        g1: '#1A1A1A',
        g2: '#474747',
        g3: '#8c8c8c',
        g4: '#d1d1d1',
        g5: '#e8e8e8',
        g6: '#f3f3f3',
        'g-white': '#ffffff',

        l1: '#2B3B91',
        l2: '#61B257',
        l3: '#E0762D',
        l4: '#519CD9',
        l5: '#7D3AD5',
        l6: '#A65422',
        l7: '#6B7228',
        l8: '#D2376E',
        l9: '#CAA846',
        'l-gong': '#82B4E0',
        'l-jung': '#8CC2A7',
        'l-chun': '#4FAC7F',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
        jalnan: ['JALNAN', 'sans-serif'],
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      borderRadius: {
        20: '20px',
      },
    },
  },
  plugins: [],
};
