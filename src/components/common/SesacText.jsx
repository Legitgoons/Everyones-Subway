import React from 'react';
import { ReactComponent as SesacIcon } from '../../assets/images/sesacIcon.svg';

const SesacText = ({ children }) => {
  return (
    <div className='flex'>
      <SesacIcon></SesacIcon>
      <div className='h4b'>{children}</div>
    </div>
  );
};

export default SesacText;
