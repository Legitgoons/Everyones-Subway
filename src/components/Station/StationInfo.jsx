import React, { useState } from 'react';
import LineIcon from './LineIcon';
import { ReactComponent as Cone } from '../../assets/images/cone.svg';
import Horizon from '../common/Horizon';
import Header from '../Header/Header';
import RouteInfoDetails from '../Route/RouteInfoDetails';
import { lineNameMap } from '../../constant/lineNum';
import StationTime from './StationTime';
import { useParams } from 'react-router-dom';

const dummy = {
  beforeStation: '종각역',
  nextStation: '서울역',
  caution1: '종각 방면 | 2번출구 근처',
  caution2: '서울역 방면 | 3번출구 근처',
  elevator: '서울역 방면 | 2번출구 근처',
};

const StationInfo = () => {
  const { line, name } = useParams();


  const {
    beforeStation,
    nextStation,
    caution1,
    caution2,
    elevator,
  } = dummy;

  const StationInfoLine = ({ line }) => {
    return (
      <div
        className={`${`bg-l${lineNameMap[line]}`} w-10 h-2`}
      />
    );
  };

  return (
    <div className='flex flex-col items-center h-screen w-screen'>
      <Header pageName={`${name} 정보`} canBackward />
      <div className='flex w-full h-20 justify-center items-center'>
        <div className='flex justify-center items-center border rounded-4xl p3b h-9 w-1/5'>&lt; {beforeStation}</div>
        <StationInfoLine line={`${line}`} />
        <div className={`${`bg-l${lineNameMap[line]}`} flex justify-center items-center w-1/4 h-14 rounded-lg h3b text-white rounded-4xl`}>시청역</div>
        <StationInfoLine line={`${line}`} />
        <div className='flex justify-center items-center border rounded-4xl p3b h-9 w-1/5'>{nextStation} &gt;</div>
      </div>

      {/* 3개 라벨 */}
      <div className='flex h-16 w-screen justify-center items-center'>
        <div className='flex justify-between w-52 h-9'>
          <RouteInfoDetails label='화장실' value={`개찰구밖`} />
          <RouteInfoDetails label='내리는문' value={`왼쪽`} />
          <RouteInfoDetails label='반대편 횡단' value={`횡단가능`} />
        </div>
      </div>

      <div className='h-1'></div>

      {/* 광운대행 인천행 이런거 들어감 */}
      <div className='flex-col h-11 w-screen'>
        <div id='윗줄' className='flex h-1/2 w-full justify-between'>
          <div className='ml-5'>
            <StationTime st='광운대행' time='1분 25초'></StationTime>
          </div>
          <div className='mr-5'>
            <StationTime st='인천행' time='5분 43초'></StationTime>
          </div>
        </div>

        <div id='아랫줄' className='flex h-1/2 w-full justify-between'>
          <div className='ml-5'>
            <StationTime st='동묘산행' time='4분 49초'></StationTime>
          </div>
          <div className='mr-5'>
            <StationTime st='신창행' time='9분 22초'></StationTime>
          </div>
        </div>
      </div>
      <div className='h-7'></div>
      <Horizon />
      <div className='h-8'></div>
      <div
        id='회색박스'
        className='flex-col h-32 w-80 rounded-20 '
        style={{ background: '#F9F9F9' }}
      >
        <div className='flex flex-col h-full items-start justify-evenly ml-16 p2b'>
          <div className='flex justify-center h-1/5'>
            <Cone />
            <p
              className='text-14 font-suit font-semibold mx-1'
              style={{ color: '#FF3D00' }}
            >
              보수중! 우회해주세요
            </p>
            <Cone />
          </div>
          <div className='flex'>
            <LineIcon line={`${lineNameMap[line]}`} />
            <p className='mx-1'>{caution1}</p>
          </div>
          <div className='flex'>
            <LineIcon line={`${lineNameMap[line]}`} />
            <p className='mx-1'>{caution2}</p>
          </div>
        </div>
      </div>
      {/* 회색박스 */}
      <div className='flex flex-col w-5/6 h-28 justify-evenly'>
        <div className='flex flex-start w-screen'>
          <p
            className='text-18 font-suit font-semibold'
          >엘레베이터 정보</p>
        </div>
        <div className='flex w-full'>
          <LineIcon line={`${lineNameMap[line]}`} />
          <p className='p2r mx-1'>{elevator}</p>
        </div>
        <div />
      </div>
      <Horizon />
      <div className='h-4'></div>
      <div className='flex flex-col flex-grow w-full'>
        <p className='flex items-center w-1/2 h-1/5 xt-18 font-suit font-semibold ml-3'>엘레베이터 가까운 탑승칸</p>
        <div className='flex items-center w-1/2 h-1/5'>
          <div className='flex justify-center items-center border rounded-4xl p3b h-9 w-1/2 mx-3'>{beforeStation} 방면</div>
          <p className='p1b'>3-2</p>
        </div>
        <div className='flex items-center w-1/2 h-1/5'>
          <div className='flex justify-center items-center border rounded-4xl p3b h-9 w-1/2 mx-3'>{nextStation} 방면</div>
          <p className='p1b'>8-3</p>
        </div>
        <div></div>
      </div>
    </div>


  );
};

export default StationInfo;
