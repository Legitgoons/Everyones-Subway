import React from 'react';

const CallState = ({ children }) => {
  let backgroundColor = 'p1';
  switch (children) {
    case '대기중':
      backgroundColor = 'warn';
      break;
    case '취소':
      backgroundColor = 'g5';
      break;
  }

  return (
    <div
      className={`px-2 py-1 bg-${backgroundColor} rounded-full font-suit font-semibold text-16`}
    >
      {children}
    </div>
  );
};

export default CallState;
