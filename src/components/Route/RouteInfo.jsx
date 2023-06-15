import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Sesac } from '../../assets/images/sesacIcon.svg';
import Horizon from '../common/Horizon';
import Header from '../Header/Header';
import RouteInfoIcons from './RouteInfoIcons';
import RouteInfoTimeButton from './RouteInfoTimeButton';
import RouteInfoDetails from './RouteInfoDetails';
import RouteInfoTransline from './RouteInfoTransline';
import LineIcon from '../Station/LineIcon';
import { lineNameMap } from '../../constant/lineNum';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const dummy = {
  travelTime: 46,
  depTime1: '17:00',
  arrTime1: '17:02', // new
  depTime2: '17:24',
  arrTime2: '17:46',
  depTime3: '',
  arrTime3: '',
  transTime: 16, // new
  travelTime1: 2, //  new
  travelTime2: 15,
  travelTime3: '',
  transInfo1: '1-3칸 앞 엘레베이터 탑승', // new
  transInfo2: '지상 2층 대합실 이동',
  transInfo3: '4호선 대합실 우측 엘레베이터 이용',
  arrTime: '17:24',
  stops: 6,
  transfer: 1,
  // cost: 1250,
  depSt: '시청',
  transSt1: '서울역',
  transSt2: '',
  arrSt: '동작역',
  stBtw1: 0,
  stBtw2: 6,
  stBtw3: 0,
  depLine: '1호선',
  transLine1: '4호선',
  transLine2: '',
  arrLine: '4호선',
  fastTrans: '빠른 환승 1-2', // 이거 환승인지 하차인지도 적어줘야 할듯?
  fastExit: '빠른 하차 1-3',
  elevator: 4, // new
  lift: 1, // new
  runway: 1, // new
};

const RouteInfo = () => {
  const [activeButton, setActiveButton] = useState('shortestTime');
  const shortestTimeClasses =
    activeButton === 'shortestTime' ? 'bg-p1 text-white' : 'bg-g6 text-g4';
  const minimumTransferClasses =
    activeButton === 'minimumTransfer' ? 'bg-p1 text-white' : 'bg-g6 text-g4';

  const arriveLine = useSelector((state) => state.path.arriveStation.line);
  const departLine = useSelector((state) => state.path.departureStation.line);
  const arriveStationName = useSelector(
    (state) => state.path.arriveStation.name
  );
  const departStationName = useSelector(
    (state) => state.path.departureStation.name
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    // 클릭 리스너를 부착합니다.
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 클릭 리스너를 제거합니다.
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const {
    travelTime,
    depTime1,
    arrTime1,
    depTime2,
    arrTime2,
    stops,
    transfer,
    transSt1,
    transTime,
    travelTime1,
    travelTime2,
    transInfo1,
    transInfo2,
    transInfo3,
    stBtw1,
    stBtw2,
    fastTrans,
    fastExit,
    elevator,
    lift,
    runway,
  } = dummy;

  const routes = [
    {
      time: depTime1,
      line: departLine,
      name: departStationName,
      stBtw: stBtw1,
    },
    {
      time: arrTime1,
      line: departLine,
      name: transSt1,
      fast: fastTrans,
      travelTime: travelTime1,
    },
    { time: depTime2, line: arriveLine, name: transSt1, stBtw: stBtw2 },
    {
      time: arrTime2,
      line: arriveLine,
      name: arriveStationName,
      fast: fastExit,
      travelTime: travelTime2,
    },
  ];
  const RouteInfoLine = ({ line, children }) => {
    return (
      <div className={`${`bg-l${lineNameMap[line]}`} w-1 h-3 border-8px`}>
        {children}
      </div>
    );
  };

  const DropdownMenu = ({ dropdownOpen }) => {
    return (
      <React.Fragment>
        {dropdownOpen && (
          <div
            className='fixed inset-0 z-10'
            onClick={() => setDropdownOpen(false)}
          />
        )}
        {dropdownOpen && (
          <ul className='w-full dropdown-menu absolute bottom-full mb-2 p1b text-black'>
            {routes.map((route, index) => (
              <li className='h-[8vh] flex items-center justify-center' key={index}>
                <Link
                  to=''
                  className='flex justify-center items-center w-4/5 h-5/6 bg-white shadow-dropTop rounded-25'
                >
                  <LineIcon line={lineNameMap[route.line]} className='mr-1' />
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  };

  const RouteInfoLineIcon = ({ line }) => {
    return (
      <div className='relative flex items-center justify-center '>
        <div
          className={`${`bg-l${lineNameMap[line]}`} w-1 h-5 border-8px`}
        ></div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center w-4 h-4 rounded-full ${`bg-l${lineNameMap[line]}`}`}
        >
          <div className={`w-2 h-2 rounded-full bg-white`} />
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col items-center h-screen'>
      <Header pageName='이동 경로 정보' canBackward />
      <div className='flex justify-between items-center h-44 w-5/6'>
        <div className='flex flex-col justify-center items-center h-36 w-36 border border-solid border-g5 border-1 rounded-20'>
          <Sesac />
          <p className='h4b'>소요시간</p>
          <p className='h1b text-p1'>{travelTime}분</p>
        </div>
        <div className='flex flex-col justify-evenly items-center h-40 w-40'>
          <RouteInfoTimeButton time={depTime1} label='출발시간' />
          <RouteInfoTimeButton time={arrTime2} label='도착시간' />
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
        <RouteInfoDetails label='정차역' value={`${stops}개역`} />
        <RouteInfoDetails label='환승' value={`${transfer}회`} />
        <RouteInfoDetails label='엘리베이터' value={`${elevator}회`} />
        <RouteInfoDetails label='리프트' value={`${lift}회`} />
        <RouteInfoDetails label='경사로' value={`${runway}회`} />
      </div>
      <Horizon />
      <div className='flex flex-col w-full h-[50vh] overflow-scroll mt-4'>
        {routes.map((route, index) => {
          const components = [];
          if (index > 0 && route.line === routes[index - 1].line) {
            const arr = [];
            for (let i = 0; i < routes[index - 1].stBtw; i++) {
              arr.push(<RouteInfoLineIcon line={route.line} />);
            }
            components.push(
              <div className='flex'>
                <div className='flex basis-2/5'>
                  <p className='basis-1/2 p3r'>{route.travelTime}분</p>
                  <div className='flex flex-col items-start basis-1/2 pl-2'>
                    <RouteInfoLine line={route.line} />
                    {arr.map((e) => {
                      return e;
                    })}
                    <RouteInfoLine line={route.line} />
                  </div>
                </div>
              </div>
            );
          }
          if (index > 0 && route.line !== routes[index - 1].line) {
            components.push(
              <RouteInfoTransline
                time={transTime}
                info1={transInfo1}
                info2={transInfo2}
                info3={transInfo3}
              />
            );
          }
          components.push(
            <RouteInfoIcons
              time={route.time}
              line={route.line}
              name={route.name}
              fast={route.fast}
            />
          );
          return components;
        })}
      </div>
      {dropdownOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10'
          onClick={() => setDropdownOpen(false)}
        />
      )}
      <button
        className='flex w-screen h-[8vh] shadow-button z-20'
        ref={dropdownRef}
      >
        <div
          className='flex justify-center items-center w-1/2 h-full text-p1 p1b relative'
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          역 정보
          <DropdownMenu dropdownOpen={dropdownOpen} />

        </div>
        <Link
          to='/call'
          className='flex justify-center items-center w-1/2 h-full text-white bg-p1 p1b'
        >
          호출하기
        </Link>
      </button>
    </div>
  );
};

export default RouteInfo;