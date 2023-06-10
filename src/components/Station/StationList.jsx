import React from 'react';
import { lineNameMap } from '../../constant/lineNum';

const StationList = ({ stationList, onClick, line }) => {
  const backgroundColor = `bg-l${lineNameMap[line]}`;
  console.log(stationList);
  return (
    <div className='h-[56vh] grid grid-cols-2 gap-x-2 gap-y-4 overflow-scroll'>
      {stationList.map((station) => (
        <button
          className={`py-3 text-center font-suit text-16 font-semibold rounded-full text-white ${backgroundColor}`}
          onClick={onClick(station.station_nm)}
        >
          {station.station_nm}
        </button>
      ))}
    </div>
  );
};

export default StationList;
