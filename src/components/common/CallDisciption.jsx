import React from 'react';
import CallLabel from '../../components/common/CallLabel';
import CallState from '../../components/common/CallState';
import Horizon from '../../components/common/Horizon';

const callInfo = {
  callTime: new Date(),
  state: '대기중',
  departureStation: '시청',
  transStation: ['서울역'],
  arriveStation: '동작',
  departureTime: new Date(),
  trainLocation: '5-4',
  requestDesc: ['휠체어 탑승', '환승구간 동행요청'],
  departHour: '17',
  departMinute: '00',
};
var weekday = ['일', '월', '화', '수', '목', '금', '토'];
const CallDisciption = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-4/5 text-left font-suit font-semibold'>
          <div>
            {`${callInfo.departureTime.getMonth() + 1
              }/${callInfo.departureTime.getDate()}(${weekday[callInfo.departureTime.getDay()]
              })`}
          </div>
          <div className='w-4/5 text-left font-suit font-semibold'>{`민원요청시간 | ${callInfo.callTime.getHours()}:${callInfo.callTime.getMinutes()}`}</div>
        </div>
        <div className='w-1/5'>
          <CallState>대기중</CallState>
        </div>
      </div>
      <div className='h-6'></div>
      <Horizon />
      <div className='h-6'></div>
      <div className='font-suit text-18 font-semibold text-left'>
        상세정보확인
      </div>
      <div className='h-3'></div>

      <CallLabel label={`출발역`}>{callInfo.departureStation}</CallLabel>
      <div className='h-2'></div>
      {callInfo.transStation.map((e) => (
        <CallLabel label={`경유역`}>{e}</CallLabel>
      ))}
      <div className='h-2'></div>
      <CallLabel label={`도착역`}>{callInfo.arriveStation}</CallLabel>
      <div className='h-2'></div>
      <CallLabel label={`출발시간`}>
        {callInfo.departHour}:{callInfo.departMinute}
      </CallLabel>
      <div className='h-2'></div>
      <CallLabel label={`탑승번호`}>{callInfo.trainLocation}</CallLabel>
      <div className='h-6'></div>
      <div className='h-32 rounded-20 flex-col  bg-g6 py-5 px-4'>
        {callInfo.requestDesc.map((e) => (
          <div className='flex justify-start'>
            <li className='font-suit font-semibold text-16'>{e}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallDisciption;
