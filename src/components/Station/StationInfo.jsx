import React, { useState } from "react";

import { ReactComponent as Cone } from "../../assets/images/cone.svg";

import Button from "../common/Button";
import Horizon from "../common/Horizon";
import Header from "../Header/Header";
import RouteInfoIcons from "../Route/RouteInfoIcons";
import RouteInfoTimeButton from "../Route/RouteInfoTimeButton";
import RouteInfoDetails from "../Route/RouteInfoDetails";
import { lineNameMap } from "../../constant/lineNum";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StationTime from "./StationTime";

const dummy = {
  travelTime: 24,
  depTime: "17:00",
  transTime1: "17:02", //이건 아직 안만듬
  transTime2: "",
  arrTime: "17:24",
  stops: 6,
  transfer: 1,
  cost: 1250,
  depSt: "시청",
  transSt1: "서울역",
  transSt2: "",
  arrSt: "동작역",
  stBtw1: 0,
  stBtw2: 0,
  stBtw3: 5,
  depLine: "1호선",
  transLine1: "4호선",
  transLine2: "",
  arrLine: "4호선",
  fastTrans: "빠른 환승 1-2", // 이거 환승인지 하차인지도 적어줘야 할듯?
  fastExit: "빠른 하차 1-3",
};

const StationInfo = () => {
  const [activeButton, setActiveButton] = useState("shortestTime");
  const shortestTimeClasses =
    activeButton === "shortestTime" ? "bg-p1 text-white" : "bg-g6 text-g4";
  const minimumTransferClasses =
    activeButton === "minimumTransfer" ? "bg-p1 text-white" : "bg-g6 text-g4";

  const arriveLine = useSelector((state) => state.path.arriveStation.line);
  const departLine = useSelector((state) => state.path.departureStation.line);
  const arriveStationName = useSelector(
    (state) => state.path.arriveStation.name
  );
  const departStationName = useSelector(
    (state) => state.path.departureStation.name
  );

  const {
    travelTime,
    depTime,
    arrTime,
    stops,
    transfer,
    cost,
    transSt1,
    transTime1,
    fastTrans,
    fastExit,
  } = dummy;

  const routes = [
    { time: depTime, line: departLine, name: departStationName },
    { time: transTime1, line: departLine, name: transSt1, fast: fastTrans },
    { time: "환승", line: arriveLine, name: transSt1 },
    {
      time: arrTime,
      line: arriveLine,
      name: arriveStationName,
      fast: fastExit,
    },
  ];

  const StationInfo = ({ line }) => {
    // 얘 분리하니까 동작을 안함;
    return (
      <div
        className={`${`bg-l${lineNameMap[line]}`} w-1 h-5 border border-8px border-solid`}
      />
    );
  };

  return (
    <div className='flex flex-col items-center h-screen'>
      <Header pageName='시청역 정보' canBackward />
      <div className='h-8'></div>

      {/* <- 시청역 -> */}
      <div className='h-12'></div>
      <div className='h-1'></div>

      {/* 3개 라벨 */}
      <div className='flex h-16 w-screen justify-center items-center'>
        <div className='flex justify-between w-52 h-9'>
          <RouteInfoDetails label='화장실' value={`개찰구밖`} />
          <RouteInfoDetails label='내리는문' value={`왼쪽`} />
          <RouteInfoDetails label='반대편 횡단' value={`횡단가능`} />
        </div>
      </div>

      <div className='h-1'></div>

      {/* 광운대행 인천행 이런거 들어감 */}
      <div className='flex-col h-11 w-screen'>
        <div id='윗줄' className='flex h-1/2 w-full justify-between'>
          <div className='ml-5'>
            <StationTime st='광운대행' time='1분 25초'></StationTime>
          </div>
          <div className='mr-5'>
            <StationTime st='인천행' time='5분 43초'></StationTime>
          </div>
        </div>

        <div id='아랫줄' className='flex h-1/2 w-full justify-between'>
          <div className='ml-5'>
            <StationTime st='동묘산행' time='4분 49초'></StationTime>
          </div>
          <div className='mr-5'>
            <StationTime st='신창행' time='9분 22초'></StationTime>
          </div>
        </div>
      </div>
      <div className='h-7'></div>
      <Horizon />
      <div className='h-8'></div>
      <div
        id='회색박스'
        className='flex-col h-32 w-80 rounded-20 '
        style={{ background: "#F9F9F9" }}
      >
        <div className='h-4'></div>
        <div className='flex justify-center'>
          <Cone></Cone>
          <div className='w-1'></div>
          <p
            className='text-14 font-suit font-semibold'
            style={{ color: "#FF3D00" }}
          >
            보수중! 우회해주세요
          </p>
          <div className='w-1'></div>
          <Cone></Cone>
        </div>
        <div className='h-4'></div>
      </div>
      {/* 회색박스 */}
      <div className='h-4'></div>
      <div className='flex flex-start w-screen'>
      <div className='w-5'></div>
        <p
            className='text-18 font-suit font-semibold'
          >엘레베이터 정보</p>
      </div>
      <Horizon />
      <div className='h-4'></div>
      <div className='flex flex-start w-screen'>
      <div className='w-5'></div>

        <p
            className='text-18 font-suit font-semibold'
            
          >엘레베이터 가까운 탑승칸</p>
      </div>
      
    </div>
  );
};

export default StationInfo;
