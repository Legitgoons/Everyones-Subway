import React from 'react';
import Header from '../../components/Header/Header';
import CallDisciption from '../../components/common/CallDisciption';
import { Link } from "react-router-dom";

const CallCompletePage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header pageName={`역무원 호출완료`} />
      <div className='px-5'>
        <CallDisciption />
      </div>

      <div className='flex-grow flex'>
        <div className='h-[9.1vh] self-end w-screen justify-around shadow-button font-suit font-semibold'>
          <Link to='/main' className='flex justify-center items-center w-full h-full text-white bg-p1'>
            확인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallCompletePage;
