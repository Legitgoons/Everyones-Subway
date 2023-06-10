import React from 'react';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import StationIcon from './StationIcon';
import { lineNameMap } from '../../constant/lineNum';

const StationSelectBtn = ({ children, station, onClick }) => {
  const backgroundColor = station.name
    ? `bg-l${lineNameMap[station.line]}`
    : 'bg-g6';
  const textColor = station.name ? `text-g6` : 'text-g1';

  return (
    <button
      onClick={onClick}
      className={`w-1/2 pb-1/2 items-center rounded-20 relative ${backgroundColor} ${textColor}`}
    >
      <div className='absolute h-full w-full flex flex-col justify-center items-center '>
        <div className='text-20 font-semibold'>{children}</div>
        <div className='h-1'></div>
        {station.name ? (
          <StationIcon station={station}></StationIcon>
        ) : (
          <PlusIcon></PlusIcon>
        )}
      </div>
    </button>
  );
};

export default StationSelectBtn;
