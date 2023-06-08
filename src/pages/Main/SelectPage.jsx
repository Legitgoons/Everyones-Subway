import React, { useState } from 'react';
import StationSelect from '../../components/Station/StationSelect'

const SelectPage = () => {
  const [departureStation, setDepartureStation] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');

  return (
    <div>
      <StationSelect onStationSelect={setDepartureStation} />
      <h2>출발: {departureStation}</h2>
      <StationSelect onStationSelect={setArrivalStation} />
      <h2>도착: {arrivalStation}</h2>
    </div>
  );
};

export default SelectPage;