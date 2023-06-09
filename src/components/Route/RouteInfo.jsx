import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Sesac } from '../../assets/images/sesac.svg'

const dummy = {
  travelTime: 24,
  depTime: '17:00',
  arrTime: '17:24',
  stops: 6,
  transfer: 1,
  cost: 1250,
  depSt: '시청',
  transSt1: '서울역',
  transSt2: '',
  arrSt: '동작역',
  stBtw1: 1,
  stBtw2: 0,
  stBtw3: 5,
  depLine: '1호선',
  transLine1: '4호선',
  transLine2: '',
  arrLine: '4호선',
  fastTrans: '1-2',
  fastExit: '1-3',
}

const RouteInfo = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-14 bg-slate-500'></div>
      <div className='flex justify-evenly items-center h-48'>
        <div className='flex flex-col justify-center items-center h-40 w-40 border-g5'>
          <Sesac />
          <p className='h4b'>소요시간</p>
          <p className='h1b text-p1'>{dummy.travelTime}분</p>
        </div>
        <div className='flex flex-col justify-evenly items-center h-40 w-40'>
          <div className='flex'>
            <button>&lt;</button>
            <div className='flex flex-col'>
              <p>출발시간</p>
              <div>{dummy.depTime}</div>
            </div>
            <button>&gt;</button>
          </div>
          <div className='flex'>
            <button>&lt;</button>
            <div className='flex flex-col'>
              <p>도착시간</p>
              <div>{dummy.arrTime}</div>
            </div>
            <button>&gt;</button>
          </div>
        </div>
      </div>
      <div>

      </div>
      {/* <NavLink to="/select"> */}
      <button className='flex justify-center items-center w-80 h-14 bg-p1 p1b text-white rounded-3xl'>
        호출하기
      </button>
      {/* </NavLink> */}
    </div>
  );
};

export default RouteInfo;