import React from 'react';
import LineIcon from './LineIcon';
import { lineNameMap } from '../../constant/lineNum';

const StationIcon = ({ station, height = '9' }) => {
  return (
    <div
      className={`h-${height} rounded-full py-2 px-4 bg-white flex items-center`}
    >
      <LineIcon line={lineNameMap[station.line]}></LineIcon>
      <div className='w-1'></div>
      <div className='text-14 text-g1 font-semibold font-suit'>
        {station.name}
      </div>
    </div>
  );
};

export default StationIcon;
