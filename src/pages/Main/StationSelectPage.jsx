import React from 'react';
import Header from '../../components/Header/Header';
import StationSelect from '../../components/Station/StationSelect';
import { useLocation } from 'react-router-dom';

const StationSelectPage = () => {
  const location = useLocation();
  const pageName =
    location.pathname === '/departure' ? '출발역 선택' : '도착역 선택';
  const departure = location.pathname === '/departure';

  return (
    <div>
      <Header pageName={pageName} canBackward />
      <StationSelect departure={departure}></StationSelect>
    </div>
  );
};

export default StationSelectPage;
