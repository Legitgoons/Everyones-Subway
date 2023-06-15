import React from 'react';
import LineIcon from './LineIcon';
import { lineNameMap } from '../../constant/lineNum';

const StationSearchBtn = ({ station, onClick }) => {
  return (
    <button
      onClick={onClick(station)}
      className={`w-auto rounded-full py-2 px-4 bg-g6 inline-flex items-center`}
    >
      <LineIcon line={lineNameMap[station.line_num]}></LineIcon>
      <div className='w-1'></div>
      <div className='text-14 text-g1 font-semibold font-suit'>
        {station.station_nm}
      </div>
    </button>
  );
};

export default StationSearchBtn;
