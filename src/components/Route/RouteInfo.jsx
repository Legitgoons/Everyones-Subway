import React, { useState } from 'react';
import { ReactComponent as Sesac } from '../../assets/images/sesacIcon.svg'
import Button from '../common/Button';
import Horizon from '../common/Horizon';
import Header from '../Header/Header';
import LineIcon from '../Station/LineIcon';
import { lineNameMap } from '../../constant/lineNum';
import { initStationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const dummy = {
  travelTime: 24,
  depTime: '17:00',
  transTime1: '17:02', //이건 아직 안만듬
  transTime2: '',
  arrTime: '17:24',
  stops: 6,
  transfer: 1,
  cost: 1250,
  depSt: '시청',
  transSt1: '서울역',
  transSt2: '',
  arrSt: '동작역',
  stBtw1: 0,
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
  const [activeButton, setActiveButton] = useState("shortestTime");
  const shortestTimeClasses = activeButton === "shortestTime" ? "bg-p1 text-white" : "bg-g6 text-g4";
  const minimumTransferClasses = activeButton === "minimumTransfer" ? "bg-p1 text-white" : "bg-g6 text-g4";

  const arriveLine = useSelector(state => state.path.arriveStation.line);
  const departLine = useSelector(state => state.path.departureStation.line);
  const arriveStationName = useSelector(state => state.path.arriveStation.name);
  const departStationName = useSelector(state => state.path.departureStation.name);


  const {
    travelTime,
    depTime,
    arrTime,
    stops,
    transfer,
    cost,
    transSt1,
    transTime1,
  } = dummy;

  const TimeButton = ({ time, label }) => (
    <div className='flex w-36 h-16 justify-around border border-solid border-g5 border-1 rounded-20'>
      <button className='p3b text-g4'>&lt;</button>
      <div className='flex flex-col justify-center'>
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

  const routes = [
    { time: depTime, line: departLine, name: departStationName },
    { time: transTime1, line: departLine, name: transSt1 },
    { time: '환승', line: arriveLine, name: transSt1 },
    { time: arrTime, line: arriveLine, name: arriveStationName },
  ];


  const RouteIcons = ({ time, line, name }) => (
    <div className='flex'>
      <div className='flex basis-2/5'>
        <p className='p3r basis-1/2'>{time}</p>
        <div className='flex basis-1/2'>
          <LineIcon line={lineNameMap[line]} />
          <p className='p3b pl-1'>{name}</p>
        </div>
      </div>
      <div className='basis-1/3' />
      <div className='flex-grow' />
    </div>
  );

  const LineLine = ({ line }) => {
    return (
      <div
        className={`${`bg-l${line}`} w-2 h-4 border border-8px border-solid`}
      />
    );
  };

  return (
    <div className='flex flex-col items-center h-screen' style={{ height: "calc(100vh - 9.1vh)" }}>
      <Header pageName='이동 경로 정보' canBackward />
      <div className='flex justify-between items-center h-44 w-5/6'>
        <div className='flex flex-col justify-center items-center h-36 w-36 border border-solid border-g5 border-1 rounded-20'>
          <Sesac />
          <p className='h4b'>소요시간</p>
          <p className='h1b text-p1'>{travelTime}분</p>
        </div>
        <div className='flex flex-col justify-evenly items-center h-40 w-40'>
          <TimeButton time={depTime} label="출발시간" />
          <TimeButton time={arrTime} label="도착시간" />
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
      <div className='flex flex-col w-full flex-grow mt-4'>
        {routes.map((route, index) => {
          // 배열을 담을 컴포넌트
          const components = [];

          // 현재 요소가 첫 번째 요소가 아니고, 현재 요소의 'line'이 이전 요소의 'line'과 같을 때
          if (index > 0 && route.line === routes[index - 1].line) {
            components.push(
            <div className='flex'>
              <div className='flex basis-2/5'>
                <p className='basis-1/2'></p>
                <div className='flex basis-1/2'>
                  <LineLine line={route.line}/>
                </div>
              </div>
            </div>
            );
          }
          if (index > 0 && route.line !== routes[index - 1].line) {
            components.push(
              <div className='flex'>
              <div className='flex basis-2/5'>
                <p className='basis-1/2'></p>
                <div className='flex basis-1/2'>
                  <div>점찍기</div>
                </div>
              </div>
            </div>
            );
          }
          // RouteIcons 컴포넌트도 추가로 출력
          components.push(<RouteIcons time={route.time} line={route.line} name={route.name} />);

          // 컴포넌트 배열 반환
          return components;
        })}
      </div>
      <Button>호출하기</Button>
    </div>
  );
};

export default RouteInfo;
