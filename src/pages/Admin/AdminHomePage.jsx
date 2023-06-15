import React from 'react';
import { ReactComponent as Calendar } from '../../assets/images/calendar.svg';
import { ReactComponent as Alarm } from '../../assets/images/alarm.svg';
import AdminHeader from '../../components/Header/AdminHeader';
import AdminInfo from '../../components/Admin/AdminInfo';
import Horizon from '../../components/common/Horizon';
import SesacText from '../../components/common/SesacText';
import CallTable from '../../components/Admin/CallTable';
import { useNavigate } from 'react-router';
const dummy = [
  { dipartureTime: '16:50', id: 1, state: '대기중' },
  { dipartureTime: '15:25', id: 2, state: '완료' },
  { dipartureTime: '13:40', id: 3, state: '취소' },
];
const AdminHomePage = () => {
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    navigate('history');
  };

  return (
    <>
      <AdminHeader pageName='모두의 지하철'></AdminHeader>
      <div className='px-5'>
        <AdminInfo>시청역</AdminInfo>
        <div className='h-3'></div>
        <div className='flex'>
          <button
            className={`w-1/2 pb-1/2 items-center rounded-20 relative border bg-p1 border-p1`}
            onClick={handleHistoryClick}
          >
            <div className='absolute h-full w-full flex flex-col justify-center items-center '>
              <Calendar />
              <div className='text-20 text-white font-semibold'>호출현황</div>
            </div>
          </button>
          <div className='w-2'></div>
          <button
            className={`w-1/2 pb-1/2 items-center rounded-20 relative border border-p1`}
          >
            <div className='absolute h-full w-full flex flex-col justify-center items-center '>
              <Alarm />
              <div className='text-20 font-semibold'>공지사항</div>
            </div>
          </button>
        </div>
        <div className='h-6'></div>
        <Horizon />
        <div className='h-6'></div>
        <SesacText>최근 호출 내역</SesacText>
        <div className='h-6'></div>
        <CallTable callList={dummy} />
      </div>
    </>
  );
};

export default AdminHomePage;
