import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import SesacText from '../../components/common/SesacText';
import Horizon from '../../components/common/Horizon';
import StationSelectBtn from '../../components/Station/StationSelectBtn';
import { useSelector, useDispatch } from 'react-redux';
import { initDeparturestate, initArriveState } from '../../store';
import { useNavigate } from 'react-router-dom';

const SelectPage = () => {
  const { arriveStation, departureStation } = useSelector((state) => {
    return state.path;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (arriveStation.name && departureStation.name) navigate('/routeinfo');
  }, [arriveStation, departureStation]);

  const handleDepatureClick = () => {
    dispatch(initDeparturestate());
    navigate('/departure');
  };

  const handleArriveClick = () => {
    dispatch(initArriveState());
    navigate('/arrive');
  };

  return (
    <div>
      <Header pageName='경로설정' canBackward />
      <div className='px-5'>
        <SesacText>지하철 경로를 설정해주세요.</SesacText>
        <div className='h-4'></div>
        <div className='flex'>
          <StationSelectBtn
            station={departureStation}
            onClick={handleDepatureClick}
          >
            출발역
          </StationSelectBtn>
          <div className='w-3'></div>
          <StationSelectBtn station={arriveStation} onClick={handleArriveClick}>
            도착역
          </StationSelectBtn>
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
