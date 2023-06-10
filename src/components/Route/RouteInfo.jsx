import React, { useEffect, useState } from 'react';
import { ReactComponent as Sesac } from '../../assets/images/sesacIcon.svg';
import Button from '../common/Button';
import Horizon from '../common/Horizon';
import Header from '../Header/Header';
import { initStationState } from '../../store';
import { useDispatch } from 'react-redux';

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
};

const RouteInfo = () => {
  const [activeButton, setActiveButton] = useState('shortestTime');
  const shortestTimeClasses =
    activeButton === 'shortestTime' ? 'bg-p1 text-white' : 'bg-g6 text-g4';
  const minimumTransferClasses =
    activeButton === 'minimumTransfer' ? 'bg-p1 text-white' : 'bg-g6 text-g4';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initStationState());
  }, []);

  const {
    travelTime,
    depTime,
    arrTime,
    stops,
    transfer,
    cost,
    depSt,
    arrSt,
    depLine,
    arrLine,
  } = dummy;

  const TimeButton = ({ time, label }) => (
    <div className='flex w-40 justify-around'>
      <button className='p3b text-g4'>&lt;</button>
      <div className='flex flex-col'>
        <p className='p3b text-g3'>{label}</p>
        <p className='h4b'>{time}</p>
      </div>
      <button className='p3b text-g4'>&gt;</button>
    </div>
  );

  const RouteDetails = ({ label, value }) => (
    <div className='flex flex-col justify-center items-center'>
      <p className='p3b text-g3'>{label}</p>
      <p className='p1b'>{value}</p>
    </div>
  );

  return (
    <div
      className='flex flex-col items-center h-screen'
      style={{ height: 'calc(100vh - 9.1vh)' }}
    >
      <Header pageName='이동 경로 정보' canBackward />
      <div className='flex justify-evenly items-center h-44'>
        <div className='flex flex-col justify-center items-center h-40 w-40 border-solid border-1 border-g5'>
          <Sesac />
          <p className='h4b'>소요시간</p>
          <p className='h1b text-p1'>{travelTime}분</p>
        </div>
        <div className='flex flex-col justify-evenly items-center h-40 w-40'>
          <TimeButton time={depTime} label='출발시간' />
          <TimeButton time={arrTime} label='도착시간' />
        </div>
      </div>
      <div className='w-full h-12'>
        <button
          className={`w-1/2 h-full rounded-t-20 rounded-b-none p2b ${shortestTimeClasses}`}
          onClick={() => setActiveButton('shortestTime')}
        >
          최단시간
        </button>
        <button
          className={`w-1/2 h-full rounded-t-20 rounded-b-none p2b ${minimumTransferClasses}`}
          onClick={() => setActiveButton('minimumTransfer')}
        >
          최소환승
        </button>
      </div>
      <div className='w-full h-0.5 bg-p1' />
      <div className='flex justify-evenly w-full h-16'>
        <RouteDetails label='정차역' value={`${stops}개역`} />
        <RouteDetails label='환승' value={`${transfer}회`} />
        <RouteDetails label='카드' value={`${cost}원`} />
      </div>
      <Horizon />
      <div className='flex flex-col w-full flex-grow'>
        <div className='flex justify-around'>
          <div className='flex'>
            <p className='p3r'>{depTime}</p>
            <div>{depLine}</div>
            <p className='p3b'>{depSt}</p>
          </div>
          <div />
          <div />
        </div>
        <div className='flex justify-around'>
          <div className='flex'>
            <p className='p3r'>{arrTime}</p>
            <div>{arrLine}</div>
            <p className='p3b'>{arrSt}</p>
          </div>
          <div />
          <div />
        </div>
      </div>
      <Button>호출하기</Button>
    </div>
  );
};

export default RouteInfo;
