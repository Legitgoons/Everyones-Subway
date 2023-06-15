import Horizon from "../../components/common/Horizon";
import SesacText from "../../components/common/SesacText";
import Header from "../../components/Header/Header";

import { ReactComponent as BlackArrSt } from "../../assets/images/Call/blackArrSt.svg";
import { ReactComponent as BlackdepSt } from "../../assets/images/Call/blackdepSt.svg";
import { ReactComponent as BlackEtc } from "../../assets/images/Call/blackEtc.svg";
import { ReactComponent as BlackLiftHelp } from "../../assets/images/Call/blackLiftHelp.svg";
import { ReactComponent as BlackSafetyPlat } from "../../assets/images/Call/blackSafetyPlat.svg";
import { ReactComponent as BlackTrainHelp } from "../../assets/images/Call/blackTrainHelp.svg";
import { ReactComponent as BlackTransSt } from "../../assets/images/Call/blackTransSt.svg";
import { ReactComponent as BlackWalkingDiff } from "../../assets/images/Call/blackWalkingDiff.svg";
import { ReactComponent as BlackWheelChair } from "../../assets/images/Call/blackWheelChair.svg";

import { ReactComponent as ColoredArrSt } from "../../assets/images/Call/coloredArrSt.svg";
import { ReactComponent as ColoredDepSt } from "../../assets/images/Call/coloreddepSt.svg";
import { ReactComponent as ColoredEtc } from "../../assets/images/Call/coloredEtc.svg";
import { ReactComponent as ColoredLiftHelp } from "../../assets/images/Call/coloredLiftHelp.svg";
import { ReactComponent as ColoredSafetyPlat } from "../../assets/images/Call/coloredSafetyPlat.svg";
import { ReactComponent as ColoredTrainHelp } from "../../assets/images/Call/coloredTrainHelp.svg";
import { ReactComponent as ColoredTransSt } from "../../assets/images/Call/coloredTransSt.svg";
import { ReactComponent as ColoredWalkingDiff } from "../../assets/images/Call/coloredWalkingDiff.svg";
import { ReactComponent as ColoredWheelChair } from "../../assets/images/Call/coloredWheelChair.svg";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";

const CallPage = () => {
  const [wheelChair, setWheelChair] = useState(false);
  const [walkingDifficulty, setWalkingDifficulty] = useState(false);
  const [etc, setEtc] = useState(false);
  const [trainHelp, setTrainHelp] = useState(false);
  const [liftHelp, setLiftHelp] = useState(false);
  const [safetyPlat, setSafetyPlat] = useState(false);
  const [callDepSt, setCallDepSt] = useState(false);
  const [callTransSt, setCallTransSt] = useState(false);
  const [callArrSt, setCallArrSt] = useState(false);

  // 임시
  const depSt = "시청역";
  const depTime = "17:00";
  const trainNo = "7042";
  const seatNo = "5-4";

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setWheelChair(!wheelChair);
    } else if (buttonNumber === 2) {
      setWalkingDifficulty(!walkingDifficulty);
    } else if (buttonNumber === 3) {
      setEtc(!etc);
    } else if (buttonNumber === 4) {
      setTrainHelp(!trainHelp);
    } else if (buttonNumber === 5) {
      setLiftHelp(!liftHelp);
    } else if (buttonNumber === 6) {
      setSafetyPlat(!safetyPlat);
    } else if (buttonNumber === 7) {
      setCallDepSt(!callDepSt);
    } else if (buttonNumber === 8) {
      setCallTransSt(!callTransSt);
    } else if (buttonNumber === 9) {
      setCallArrSt(!callArrSt);
    }
  };

  return (
    <div className='w-360 h-screen flex flex-col items-center justify-end'>
      <Header pageName='역무원 호출하기' canBackward />
      <div className='h-6'></div>
      <div className='flex flex-col  h-full text-left'>
        <div className='flex w-full'>
          <div className='w-5 '></div>
          <div
            className='w-12 flex items-center text-16 font-semibold'
            style={{ color: "#5ACE6F" }}
          >
            출발역
          </div>
          <div className='w-11'></div>
          <div className='w-60 border rounded-3xl  p-2 text-16 font-semibold py-2 px-4'>
            {depSt}
          </div>
          <div className='w-5'></div>
        </div>

        <div className='h-2'></div>

        <div className='flex w-full'>
          <div className='w-5 '></div>
          <div
            className='w-16 flex items-center text-16 font-semibold'
            style={{ color: "#5ACE6F" }}
          >
            출발시간
          </div>
          <div className='w-7'></div>
          <div className='w-60 border rounded-3xl  p-2 text-16 font-semibold py-2 px-4'>
            {depTime}
          </div>
          <div className='w-5'></div>
        </div>

        

        <div className='h-2'></div>

        <div className='flex w-full'>
          <div className='w-5 '></div>
          <div
            className='w-16 flex items-center text-16 font-semibold'
            style={{ color: "#5ACE6F" }}
          >
            탑승번호
          </div>
          <div className='w-7'></div>
          <div className='w-60 border rounded-3xl  p-2 text-16 font-semibold py-2 px-4'>
            {seatNo}
          </div>
          <div className='w-5'></div>
        </div>

        <div className='h-8'></div>
        <div className='box-border w-360 bg-g6'>
          <Horizon />
        </div>
        <div className='h-8'></div>

        <div className='flex-col '>
          <div className='flex w-full'>
            <div className='w-4'></div>
            <SesacText>현재 상태</SesacText>
          </div>

          <div className='h-3'></div>

          <div className='flex' id='현재상태 버튼'>
            <div className='w-5'></div>

            <div className='flex h-20 w-64'>
              {/* 휠체어 탑승 버튼 */}
              <button
                onClick={() => handleButtonClick(1)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {wheelChair ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredWheelChair />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackWheelChair />
                  </div>
                )}
              </button>

              <div className='w-4'></div>
              {/* 거동 불편 버튼 */}
              <button
                onClick={() => handleButtonClick(2)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {walkingDifficulty ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredWalkingDiff />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackWalkingDiff />
                  </div>
                )}
              </button>
              <div className='w-4'></div>
              {/* 기타 민원 버튼 */}
              <button
                onClick={() => handleButtonClick(3)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {etc ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredEtc />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackEtc />
                  </div>
                )}
              </button>
            </div>
          </div>

          <div className='h-6'></div>

          <div className='flex w-full'>
            <div className='w-4'></div>
            <SesacText>이런 도움이 필요해요</SesacText>
          </div>

          <div className='h-3'></div>

          <div className='flex' id='도움 필요 버튼'>
            <div className='w-5'></div>

            <div className='flex h-20 w-64'>
              {/* 휠체어 탑승 버튼 */}
              <button
                onClick={() => handleButtonClick(4)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {trainHelp ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredTrainHelp />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackTrainHelp />
                  </div>
                )}
              </button>

              <div className='w-4'></div>
              {/* 거동 불편 버튼 */}
              <button
                onClick={() => handleButtonClick(5)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {liftHelp ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredLiftHelp />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackLiftHelp />
                  </div>
                )}
              </button>
              <div className='w-4'></div>
              {/* 기타 민원 버튼 */}
              <button
                onClick={() => handleButtonClick(6)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {safetyPlat ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredSafetyPlat />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackSafetyPlat />
                  </div>
                )}
              </button>
            </div>
          </div>
          {/* 여기까지 이런 도움이 필요해요 */}

          <div className='h-6'></div>

          <div className='flex w-full'>
            <div className='w-4'></div>
            <SesacText>어디에 호출할까요?</SesacText>
          </div>

          <div className='h-3'></div>

          <div className='flex' id='어느역 호출 버튼'>
            <div className='w-5'></div>

            <div className='flex h-20 w-64'>
              {/* 휠체어 탑승 버튼 */}
              <button
                onClick={() => handleButtonClick(7)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {callDepSt ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredDepSt />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackdepSt />
                  </div>
                )}
              </button>

              <div className='w-4'></div>
              {/* 거동 불편 버튼 */}
              <button
                onClick={() => handleButtonClick(8)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {callTransSt ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredTransSt />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackTransSt />
                  </div>
                )}
              </button>
              <div className='w-4'></div>
              {/* 기타 민원 버튼 */}
              <button
                onClick={() => handleButtonClick(9)}
                className='w-24 h-full items-center rounded-20 relative'
                style={{ position: "relative" }}
              >
                {callArrSt ? (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <ColoredArrSt />
                  </div>
                ) : (
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <BlackArrSt />
                  </div>
                )}
              </button>
            </div>
          </div>
          {/* 여기까지 어디에 호출할까요? */}
        </div>
        {/* 현재상태 ~ 어디에 호출할까요? */}
      <div className='h-10'> </div>
      </div>
      <Link>
        <Button>호출전송</Button>
      </Link>
      <div className='h-5'></div>

      {/* 헤더 ~ 도움이 필요해요 */}
    </div>
  );
};

export default CallPage;
