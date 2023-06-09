import React, { useState } from 'react';
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
  const [activeButton, setActiveButton] = useState("shortestTime");
  const shortestTimeClasses = activeButton === "shortestTime" ? "bg-p1 text-white" : "bg-g6 text-g4";
  const minimumTransferClasses = activeButton === "minimumTransfer" ? "bg-p1 text-white" : "bg-g6 text-g4";


  return (
    <div className='flex flex-col items-center'>
      <div className='h-14'>헤더에용</div>
      <div className='flex justify-evenly items-center h-44'>
        <div className='flex flex-col justify-center items-center h-40 w-40 border-solid border-1 border-g5'>
          <Sesac />
          <p className='h4b'>소요시간</p>
          <p className='h1b text-p1'>{dummy.travelTime}분</p>
        </div>
        <div className='flex flex-col justify-evenly items-center h-40 w-40'>
          <div className='flex w-40 justify-around'>
            <button className='p3b text-g4'>&lt;</button>
            <div className='flex flex-col'>
              <p className='p3b text-g3'>출발시간</p>
              <p className='h4b'>{dummy.depTime}</p>
            </div>
            <button className='p3b text-g4'>&gt;</button>
          </div>
          <div className='flex w-40 justify-around'>
            <button className='p3b text-g4'>&lt;</button>
            <div className='flex flex-col'>
              <p className='p3b text-g3'>도착시간</p>
              <p className='h4b'>{dummy.arrTime}</p>
            </div>
            <button className='p3b text-g4'>&gt;</button>
          </div>
        </div>
      </div>
      <div className='w-full h-12'>
      <button
          className={`w-1/2 h-full rounded-t-20 rounded-b-none p2b ${shortestTimeClasses}`}
          onClick={() => setActiveButton("shortestTime")}
        >
          최단시간
        </button>
        <button
          className={`w-1/2 h-full rounded-t-20 rounded-b-none p2b ${minimumTransferClasses}`}
          onClick={() => setActiveButton("minimumTransfer")}
        >
          최소환승
        </button>
      </div>
      <div className='w-full h-0.5 bg-p1' />
      <div className='flex justify-evenly w-full h-16'>
        <div className='flex flex-col justify-center items-center'>
          <p className='p3b text-g3'>정차역</p>
          <p className='p1b'>{dummy.stops}개역</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='p3b text-g3'>환승</p>
          <p className='p1b'>{dummy.transfer}회</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='p3b text-g3'>카드</p>
          <p className='p1b'>{dummy.cost}원</p>
        </div>
      </div>
      <div className='flex flex-col flex-grow w-full'>
        <div className='flex justify-around'>
          <div className='flex'>
            <p className='p3r'>{dummy.depTime}</p>
            <div>{dummy.depLine}</div>
            <p className='p3b'>{dummy.depSt}</p>
          </div>
          <div />
          <div />
        </div>
        <div className='flex justify-around'>
          <div className='flex'>
            <p className='p3r'>{dummy.arrTime}</p>
            <div>{dummy.arrLine}</div>
            <p className='p3b'>{dummy.arrSt}</p>
          </div>
          <div />
          <div />
        </div>      </div>
      {/* <NavLink to="/select"> */}
      <button className='flex justify-center items-center w-80 h-14 bg-p1 p1b text-white rounded-3xl'>
        호출하기
      </button>
      {/* </NavLink> */}
    </div>
  );
};

export default RouteInfo;