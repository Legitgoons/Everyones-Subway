import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StationSelect = ({ onStationSelect }) => {
  const [stations, setStations] = useState([]);
  const [lineNum, setLineNum] = useState('');
  const [stationName, setStationName] = useState('');
  const [lineNums, setLineNums] = useState([]);

  useEffect(() => {
    axios.get('../assets/stations.json')
      .then(response => {
        setStations(response.data.DATA);
        const uniqueLineNums = [...new Set(response.data.DATA.map(station => station.line_num))];
        setLineNums(uniqueLineNums);
      });
  }, []);

  const handleLineNumChange = (event) => {
    setLineNum(event.target.value);
    setStationName('');
  }

  const handleStationNameChange = (event) => {
    setStationName(event.target.value);
    onStationSelect(event.target.value);
  }

  const filteredStations = stations.filter(station => station.line_num === lineNum);

  return (
    <div>
      <select value={lineNum} onChange={handleLineNumChange} style={{width: '100vw', height: '10vh'}}>
        <option value="">호선을 선택해주세요</option>
        {lineNums.map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      {lineNum && (
        <select value={stationName} onChange={handleStationNameChange} style={{width: '100vw', height: '10vh'}}>
          <option value="">역을 선택해주세요</option>
          {filteredStations.map(station => (
            <option key={station.station_cd} value={station.station_nm}>{station.station_nm}</option>
          ))}
        </select>
      )}

      <h1>{stationName}</h1>
    </div>
  );
};

export default StationSelect;