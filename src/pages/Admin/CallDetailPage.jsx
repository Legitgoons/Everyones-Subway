import React from 'react';
import AdminHeader from '../../components/Header/AdminHeader';
import CallDisciption from '../../components/common/CallDisciption';

const CallDetailPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <AdminHeader canBackward pageName={`호출 상세내역`} />
      <div className='px-5'>
        <CallDisciption />
      </div>

      <div className='flex-grow flex'>
        <div className='h-[9.1vh] self-end w-screen flex items-center justify-around bg-white shadow-button font-suit font-semibold'>
          <button className='flex justify-center items-center w-1/2 h-full text-p1 bg-white'>
            확인 메세지
          </button>
          <button className='flex justify-center items-center w-1/2 h-full text-white bg-p1'>
            환승역 전달
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallDetailPage;
