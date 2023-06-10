import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import SesacText from '../common/SesacText';
import Horizon from '../common/Horizon';
import LineList from './LineList';
import StationList from './StationList';
import { useSelector, useDispatch } from 'react-redux';
import {
  setDepartureLine,
  setDepartureStation,
  setArriveLine,
  setArriveStation,
  initDeparturestate,
  initArriveState,
} from '../../store';
import { useNavigate } from 'react-router-dom';

const StationSelect = ({ departure }) => {
  const [stations, setStations] = useState([]);
  const [lineNums, setLineNums] = useState([]);
  const { arriveStation, departureStation } = useSelector((state) => {
    return state.path;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('../assets/stations.json').then((response) => {
      setStations(response.data.DATA);
      const uniqueLineNums = [
        ...new Set(response.data.DATA.map((station) => station.line_num)),
      ];
      uniqueLineNums.sort();
      setLineNums(uniqueLineNums);
    });
  }, []);

  const handleClickLine = (line) => () => {
    const action = departure ? setDepartureLine : setArriveLine;
    const resetAction = departure ? setDepartureStation : setArriveStation;
    dispatch(action(line));
    dispatch(resetAction(null));
  };

  const handleClickStation = (station) => () => {
    const action = departure ? setDepartureStation : setArriveStation;
    dispatch(action(station));
    navigate('/select', { replace: true });
  };

  const handleClickReset = () => {
    const action = departure ? initDeparturestate : initArriveState;
    dispatch(action());
  };

  const stationSort = (a, b) => {
    const x = a.station_nm;
    const y = b.station_nm;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  };

  return (
    <div className='px-5'>
      <SesacText>{departure ? '출발역' : '도착역'}을 선택해주세요.</SesacText>
      <div className='h-4'></div>
      <div className='rounded-3xl h-12 border border-g5 flex items-center justify-between px-4'>
        <input
          type='text'
          placeholder={`${departure ? '출발역' : '도착역'}을 입력하세요.`}
          className='font-semibold text-18'
        />
      </div>
      <div className='h-8'></div>
      <Horizon />
      <div className='h-8'></div>
      <Suspense>
        {!(departure ? departureStation.line : arriveStation.line) && (
          <LineList lineNums={lineNums} onClick={handleClickLine} />
        )}
      </Suspense>
      <Suspense>
        {(departure ? departureStation.line : arriveStation.line) && (
          <StationList
            line={departure ? departureStation.line : arriveStation.line}
            stationList={stations
              .filter(
                (station) =>
                  station.line_num ===
                  (departure ? departureStation.line : arriveStation.line)
              )
              .sort(stationSort)}
            onClick={handleClickStation}
          />
        )}
      </Suspense>
    </div>
  );
};

export default StationSelect;
