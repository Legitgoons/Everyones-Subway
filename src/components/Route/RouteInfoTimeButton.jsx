import React from 'react';

const RouteInfoTimeButton = ({ time, label }) => {
  return (
    <div className='flex w-36 h-16 justify-around border border-solid border-g5 border-1 rounded-20'>
      <button className='p3b text-g4'>&lt;</button>
      <div className='flex flex-col justify-center'>
        <p className='p3b text-g3'>{label}</p>
        <p className='h4b'>{time}</p>
      </div>
      <button className='p3b text-g4'>&gt;</button>
    </div>
  );
};

export default RouteInfoTimeButton;