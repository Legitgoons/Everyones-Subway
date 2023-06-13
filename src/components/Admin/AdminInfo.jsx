import React from 'react';

const AdminInfo = ({ children }) => {
  return (
    <div className='flex items-center'>
      <div className='py-2 px-3 rounded-full border'>관리자정보</div>
      <div className='w-2'></div>
      <div className='font-suit font-semibold text-20'>{children}</div>
    </div>
  );
};

export default AdminInfo;
