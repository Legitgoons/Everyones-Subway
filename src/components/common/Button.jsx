import React from 'react';

const Button = ({ label }) => {
  return(
    <button className='flex justify-center items-center w-80 h-14 bg-p1 p1b text-white rounded-3xl'>
      {label}
    </button>
  );
};

export default Button;