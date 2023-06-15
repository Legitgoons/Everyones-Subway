import React from 'react';

const CallLabel = ({ label, children }) => {
  return (
    <div className='flex w-full'>
      <div
        className='w-1/4 flex items-center text-16 font-semibold font-suit'
        style={{ color: '#5ACE6F' }}
      >
        {label}
      </div>
      <div className='w-3/4 border rounded-3xl  p-2 text-16 font-semibold py-2 px-4 text-left font-suit'>
        {children}
      </div>
      <div className='w-5'></div>
    </div>
  );
};

export default CallLabel;
