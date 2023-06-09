import React from 'react';
import { ReactComponent as SesacIcon } from '../../assets/images/sesacIcon.svg';

const sesacText = ({ children }) => {
  return (
    <div className='flex'>
      <SesacIcon></SesacIcon>
      <div className='text-20 font-semibold'>{children}</div>
    </div>
  );
};

export default sesacText;
