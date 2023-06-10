import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SesacText from '../../components/common/SesacText';
import Horizon from '../../components/common/Horizon';
import StationSelectBtn from '../../components/Station/StationSelectBtn';

const SelectPage = () => {
  const [departureStation, setDepartureStation] = useState({});
  const [arrivalStation, setArrivalStation] = useState({});

  const change = () => {
    setDepartureStation({ line: 1, name: '시청' });
    setArrivalStation({ line: 4, name: '동작' });
  };

  return (
    <div>
      <Header pageName='경로설정' canBackward />
      <div className='px-5'>
        <SesacText>지하철 경로를 설정해주세요.</SesacText>
        <div className='h-4'></div>
        <div className='flex'>
          <StationSelectBtn station={departureStation} onClick={change}>
            출발역
          </StationSelectBtn>
          <div className='w-3'></div>
          <StationSelectBtn station={arrivalStation}>도착역</StationSelectBtn>
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
