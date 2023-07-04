import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import SesacText from "../common/SesacText";
import Horizon from "../common/Horizon";
import LineList from "../Station/LineList";
import StationList from "../Station/StationList";
import { useSelector, useDispatch } from "react-redux";
import {
  setDepartureLine,
  setDepartureStation,
  setArriveLine,
  setArriveStation,
} from "../../store";
import { useNavigate } from "react-router-dom";
import Spinner from "../common/Spinner";
import StationSearchBtn from "../Station/StationSearchBtn";
import Header from "../../components/Header/Header";

const dummy = [
  { station_nm: "시청", line_num: "01호선" },
  { station_nm: "문래역", line_num: "02호선" },
  { station_nm: "강남역", line_num: "02호선" },
];

const StationInfoSelect = ({ departure }) => {
  const [stations, setStations] = useState([]);
  const [lineNums, setLineNums] = useState([]);
	const [lineNum, setLineNum] = useState('');
  const [searchText, setSearchText] = useState('');
  const {arriveStation, departureStation } = useSelector((state) => {
    return state.path;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("../assets/stations.json").then((response) => {
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
		setLineNum(line);
  };

  const handleClickStation = (station) => () => {
    const action = departure ? setDepartureStation : setArriveStation;
    dispatch(action(station));
    navigate(`/stationinfo/${lineNum}/${station}`, { replace: true });
  };

  const handleClickSearchBtn = (wholeInfo) => () => {
    handleClickLine(wholeInfo.line_num)();
    handleClickStation(wholeInfo.line_num, wholeInfo.station_nm)();
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const stationSort = (a, b) => {
    const x = a.station_nm;
    const y = b.station_nm;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  };

  const stationLengthSort = (a, b) => {
    const x = a.station_nm.length;
    const y = b.station_nm.length;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  };

  return (
    <div>
      <Header pageName={"역 정보 선택"} />
      <div className="px-5">
        <SesacText>역을 선택해주세요.</SesacText>
        <div className="h-4"></div>
        <div className="rounded-3xl h-12 border border-g5 flex items-center justify-between px-4">
          <input
            type="text"
            placeholder="역을 입력하세요."
            className="font-semibold text-18"
            onChange={handleSearchChange}
          />
        </div>
        <div className="h-4"></div>
        <div className="flex gap-1">
          {dummy.map((e) => {
            return (
              <div className="flex justify-start">
                <StationSearchBtn
                  station={e}
                  onClick={handleClickSearchBtn}
                ></StationSearchBtn>
              </div>
            );
          })}
        </div>
        <div className="h-5"></div>
        <Horizon />
        <div className="h-5"></div>
        {!searchText && (
          <>
            <Suspense fallback={<Spinner />}>
              {!(departure ? departureStation.line : arriveStation.line) && (
                <LineList lineNums={lineNums} onClick={handleClickLine} />
              )}
            </Suspense>
            <Suspense fallback={<Spinner />}>
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
          </>
        )}
        {searchText && (
          <div className="flex flex-col gap-3 overflow-scroll h-[56vh]">
            {stations
              .filter((s) => s.station_nm.includes(searchText))
              .sort(stationLengthSort)
              .map((e) => {
                return (
                  <div className="flex justify-start">
                    <StationSearchBtn
                      station={e}
                      onClick={handleClickSearchBtn}
                    ></StationSearchBtn>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StationInfoSelect;
