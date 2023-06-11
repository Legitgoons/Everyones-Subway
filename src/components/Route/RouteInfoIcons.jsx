import React from 'react';
import LineIcon from '../Station/LineIcon';
import { lineNameMap } from '../../constant/lineNum';

const RouteIcons = ({ time, line, name }) => {
  return (
    <div className='flex'>
      <div className='flex basis-2/5'>
        <p className='p3r basis-1/2'>{time}</p>
        <div className='flex basis-1/2'>
          <LineIcon line={lineNameMap[line]} />
          <p className='p3b pl-1'>{name}</p>
        </div>
      </div>
      <div className='basis-1/3' />
      <div className='flex-grow' />
    </div>
  );
};

export default RouteIcons;