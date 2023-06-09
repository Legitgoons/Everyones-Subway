import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SesacText from '../../components/common/SesacText';
import Horizon from '../../components/common/Horizon';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';

const SelectPage = () => {
  const [departureStation, setDepartureStation] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');

  return (
    <div>
      <Header pageName='경로설정' canBackward />
      <div className='px-5'>
        <SesacText>지하철 경로를 설정해주세요.</SesacText>
        <div className='h-4'></div>
        <div className='flex'>
          <button className='w-1/2 pb-1/2 items-center rounded-20 bg-g6 relative active:bg-p1'>
            <div className='absolute h-full w-full flex flex-col justify-center items-center'>
              <div className='text-20 font-semibold'>출발역</div>
              <PlusIcon></PlusIcon>
            </div>
          </button>
          <div className='w-3'></div>
          <button className='w-1/2 pb-1/2 items-center rounded-20 bg-g6 relative active:bg-p1'>
            <div className='absolute h-full w-full flex flex-col justify-center items-center'>
              <div className='text-20 font-semibold'>도착역 </div>
              <PlusIcon></PlusIcon>
            </div>
          </button>
        </div>
        <div className='h-6'></div>
        <Horizon />
        <div className='h-6'></div>
        <SesacText>최근 조회 내역</SesacText>
      </div>
    </div>
  );
};

export default SelectPage;
