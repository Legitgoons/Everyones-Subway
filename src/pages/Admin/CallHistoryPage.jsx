import React, { useState } from 'react';
import AdminHeader from '../../components/Header/AdminHeader';
import CallTable from '../../components/Admin/CallTable';

const dummy = [
  { dipartureTime: '16:50', id: 1, state: '대기중' },
  { dipartureTime: '15:25', id: 2, state: '완료' },
  { dipartureTime: '13:40', id: 3, state: '취소' },
];
var weekday = ['일', '월', '화', '수', '목', '금', '토'];

const CallHistoryPage = () => {
  const [today, setToday] = useState(new Date());

  const handleClicKDate = (d) => () => {
    const newDay = new Date(today.getTime());
    newDay.setDate(newDay.getDate() + d);
    setToday(newDay);
  };

  const aDayAgo = new Date(today.getTime());
  aDayAgo.setDate(aDayAgo.getDate() - 1);

  const aDayAfter = new Date(today.getTime());
  aDayAfter.setDate(aDayAfter.getDate() + 1);

  return (
    <>
      <AdminHeader pageName={`호출현황`} canBackward />
      <div className='px-5 '>
        <div className='flex justify-between font-suit font-semibold items-center '>
          <button
            className=' py-2 px-3 rounded-full border border-g5'
            onClick={handleClicKDate(-1)}
          >
            {`< ${aDayAgo.getMonth() + 1}/${aDayAgo.getDate()}(${
              weekday[aDayAgo.getDay()]
            })`}
          </button>
          <div className='py-2 px-4 text-20 rounded-full bg-p1 text-white'>
            {`${today.getMonth() + 1}/${today.getDate()}(${
              weekday[today.getDay()]
            })`}
          </div>
          <button
            className='py-2 px-3 rounded-full border border-g5'
            onClick={handleClicKDate(1)}
          >
            {`${aDayAfter.getMonth() + 1}/${aDayAfter.getDate()}(${
              weekday[aDayAfter.getDay()]
            }) >`}
          </button>
        </div>
        <div className='h-4'></div>
        <CallTable callList={dummy} />
      </div>
    </>
  );
};

export default CallHistoryPage;
