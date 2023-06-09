module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#5ACE6F',
        p2: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #5ACE6F;',
        p3: 'linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #5ACE6F;',
        p4: 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #5ACE6F;',
        p5: 'linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #5ACE6F;',
        p6: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #5ACE6F;',
        p7: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #5ACE6F;',

        g1: '#1A1A1A',
        g2: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #1A1A1A;',
        g3: 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #1A1A1A;',
        g4: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #1A1A1A;',
        g5: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #1A1A1A;',
        g6: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #1A1A1A;',
        'g-white':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #1A1A1A;',

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
    },
  },
  plugins: [],
};
