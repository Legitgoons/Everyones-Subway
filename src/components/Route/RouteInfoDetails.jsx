import React from 'react';

const RouteInfoDetails = ({ label, value }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='p3b text-g3'>{label}</p>
      <p className='p1b'>{value}</p>
    </div>
  );
};

export default RouteInfoDetails;