import React from 'react';

const LineIcon = ({ line, className }) => {
  return (
    <div
      className={`w-5 h-5 rounded-full ${`bg-l${line}`} text-g6 text-12 flex justify-center items-center  ${className}`}
    >
      {line}
    </div>
  );
};

export default LineIcon;
