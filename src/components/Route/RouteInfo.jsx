import React from 'react';
import { NavLink } from 'react-router-dom';

const RouteInfo = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-14 bg-slate-500'></div>
      <div>
        <div>소요시간</div>
        <div>
          <div>출발시간</div>
          <div>도착시간</div>
        </div>
      </div>
      <div>

      </div>
      <NavLink to="/select">
        <button className='flex justify-center items-center w-80 h-14 bg-my-green p1b text-white rounded-3xl'>
          호출하기
        </button>
      </NavLink>
    </div>
  );
};

export default RouteInfo;