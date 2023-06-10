import React from 'react';

const LineIcon = ({ line }) => {
  return (
    <div
      className={`w-5 h-5 rounded-full ${`bg-l${line}`} text-g6 text-12 text-center`}
    >
      {line}
    </div>
  );
};

export default LineIcon;
