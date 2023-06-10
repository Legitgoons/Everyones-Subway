import React from 'react';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import StationIcon from './StationIcon';

const StationSelectBtn = ({ children, station, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-1/2 pb-1/2 items-center rounded-20 relative ${
        station.line ? `bg-l${station.line}` : 'bg-g6'
      }
      ${station.line ? `text-g6` : 'text-g1'}
      `}
    >
      <div className='absolute h-full w-full flex flex-col justify-center items-center'>
        <div className='text-20 font-semibold'>{children}</div>
        <div className='h-1'></div>
        {station.line ? (
          <StationIcon station={station}></StationIcon>
        ) : (
          <PlusIcon></PlusIcon>
        )}
      </div>
    </button>
  );
};

export default StationSelectBtn;
