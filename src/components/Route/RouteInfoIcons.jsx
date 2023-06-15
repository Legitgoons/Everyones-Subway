import React from 'react';
import LineIcon from '../Station/LineIcon';
import { lineNameMap } from '../../constant/lineNum';

const RouteIcons = ({ time, line, name, fast }) => {
  return (
    <div className='flex'>
      <div className='flex basis-2/5'>
        <p className='flex basis-1/2 justify-center items-center captionr'>{time}</p>
        <div className='flex basis-1/2'>
          <LineIcon line={lineNameMap[line]} />
          <p className='p3b pl-1'>{name}</p>
        </div>
      </div>
      <div className='basis-1/3 flex justify-center items-center'>
        {fast && (
          <p className='here w-4/5 flex justify-center items-center border border-1 border-g5 rounded-25 p3b'>
            {fast}
          </p>
        )}
      </div>
      <div className='flex-grow' />
    </div>
  );
};

export default RouteIcons;