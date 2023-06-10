import React from 'react';

const Button = ({ children }) => {
  return(
    <button className='flex justify-center items-center w-80 h-14 bg-p1 p1b text-white rounded-3xl'>
      {children}
    </button>
  );
};

export default Button;