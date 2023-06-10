import React from 'react';
import Header from '../../components/Header/Header';
import StationSelect from '../../components/Station/StationSelect';

const StationSelectPage = ({ pageName }, { setStation }) => {
  return (
    <div>
      <Header pageName={pageName} />
      <StationSelect onStationSelect={setStation}></StationSelect>
    </div>
  );
};

export default StationSelectPage;
