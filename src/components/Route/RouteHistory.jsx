import React from 'react';
import { ReactComponent as Direction } from '../../assets/images/direction.svg';
import LineIcon from '../Station/LineIcon';
const RouteHistory = ({ routeHistory }) => {
  return (
    <div>
      {routeHistory.map((e) => {
        return (
          <div className='border-t py-4 px-5 flex'>
            <div className='w-1/5 flex flex-col justify-center items-center'>
              <div className='font-suit'>{e.departure.name}</div>
              <div className='flex'>
                {e.departure.line.map((l) => (
                  <LineIcon line={l} />
                ))}
              </div>
            </div>
            <div className='flex items-center'>
              <Direction />
            </div>
            <div className='w-1/5 flex flex-col justify-center items-center'>
              <div className='font-suit'>{e.arrive.name}</div>
              <div className='flex'>
                {e.arrive.line.map((l) => (
                  <LineIcon line={l} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RouteHistory;
