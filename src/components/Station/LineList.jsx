import React from 'react';
import LineIcon from './LineIcon';
import { lineNameMap } from '../../constant/lineNum';

const LineList = ({ lineNums, onClick }) => {
  return (
    <div className='h-[56vh] grid grid-cols-3 gap-2 overflow-scroll'>
      {lineNums.map((num) => {
        return (
          <button
            className='h-24 w-24 rounded-20 flex flex-col justify-center items-center border'
            onClick={onClick(num)}
          >
            <div className='font-suit font-semibold text-18'>{num}</div>
            <div className='h-2'></div>
            <LineIcon line={lineNameMap[num]} />
          </button>
        );
      })}
    </div>
  );
};

export default LineList;
