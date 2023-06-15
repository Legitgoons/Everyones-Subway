import React from 'react';
import Horizon from '../common/Horizon';
import { ReactComponent as TranslineDots } from '../../assets/images/translineDots.svg';

const RouteInfoTranslineDots = ({ time, info1, info2, info3 }) => {
  return (
    <div className='flex flex-col py-1'>
      <Horizon />
      <div className='flex'>
        <div className='flex basis-2/5'>
          <div className='flex flex-col justify-center basis-1/2 p3r'>
            <p>환승</p>
            <p>{time}분</p>
          </div>
          <div className='flex basis-1/2 pl-2'>
            <TranslineDots />
          </div>
        </div>
        <div className='flex flex-col justify-center p3b'>
          <p>{info1}</p>
          <p>{info2}</p>
          <p>{info3}</p>
        </div>
      </div>
      <Horizon />
    </div>
  );
};

export default RouteInfoTranslineDots;