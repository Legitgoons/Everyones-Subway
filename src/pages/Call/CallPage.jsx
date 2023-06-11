import Horizon from "../../components/common/Horizon";
import SesacText from "../../components/common/SesacText";
import Header from "../../components/Header/Header";
import { ReactComponent as WheelChairColored } from "../../assets/images/wheelChairColored.svg";
import { ReactComponent as WheelChairBlack } from "../../assets/images/wheelChairBlack.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";

const CallPage = () => {
  const [wheelChair, setWheelChair] = useState(false);
  const [walkingDifficulty, setWalkingDifficulty] = useState(false);
  const [etc, setEtc] = useState(false);
  const [needTrainHelp, setNeedTrainHelp] = useState(false);
  const [needLiftHelp, setNeedLiftHelp] = useState(false);

  
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
      setNeedTrainHelp(!needTrainHelp);
    } else if (buttonNumber === 5) {
      setNeedLiftHelp(!needLiftHelp);
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
            탑승열차
          </div>
          <div className='w-7'></div>
          <div className='w-60 border rounded-3xl  p-2 text-16 font-semibold py-2 px-4'>
            {trainNo}
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

        <div className='h-9'></div>
        <div className='box-border w-360 bg-g6'>
          <Horizon />
        </div>
        <div className='h-9'></div>

        <div className='flex-col h-'>
          <div className='flex w-full'>
            <div className='w-4'></div>
            <SesacText>현재 상태</SesacText>
          </div>

          <div className='h-4'></div>

          <div className='flex h-28'>
            {/* 휠체어 탑승 버튼 */}
            <div className='w-4'></div>
            <button
              onClick={() => handleButtonClick(1)}
              className='w-24 h-full items-center rounded-20 relative'
              style={{ position: "relative" }}
            >
              {wheelChair ? (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairColored />
                  <div className='text-16 font-semibold text-center'>
                    휠체어 탑승
                  </div>
                </div>
              ) : (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairBlack />
                  <div className='text-16 text-center'>휠체어 탑승</div>
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
                  <WheelChairColored />
                  <div className='text-16 font-semibold'>거동 불편</div>
                </div>
              ) : (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairBlack />
                  <div className='text-16'>거동 불편</div>
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
                  <WheelChairColored />
                  <div className='text-16 font-semibold'>기타 민원</div>
                </div>
              ) : (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairBlack />
                  <div className='text-16'>기타 민원</div>
                </div>
              )}
            </button>
          </div>

          <div className='h-10'></div>

          <div className='flex w-full'>
            <div className='w-4'></div>
            <SesacText>도움이 필요해요</SesacText>
          </div>

          <div className='h-4'></div>

          <div className='flex h-28'>
            {/* 열차 탑승 버튼 */}
            <div className='w-4'></div>
            <button
              onClick={() => handleButtonClick(4)}
              className='w-24 h-full items-center rounded-20 relative'
              style={{ position: "relative" }}
            >
              {needTrainHelp ? (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairColored />
                  <div className='text-16 font-semibold text-center'>
                    열차 탑승
                  </div>
                </div>
              ) : (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairBlack />
                  <div className='text-16 text-center'>열차 탑승</div>
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
              {needLiftHelp ? (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairColored />
                  <div className='text-16 font-semibold'>리프트 이용</div>
                </div>
              ) : (
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  <WheelChairBlack />
                  <div className='text-16'>리프트 이용</div>
                </div>
              )}
            </button>
          </div>
          {/* 도움이필요해요 */}
        </div>
        {/* 현재상태 ~ 도움이 필요해요 */}
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
