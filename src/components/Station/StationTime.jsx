import React from "react";

const StationTime = ({ st, time }) => {
  return (
    <div className='flex h-5'>
      <div className='w-14'>
        <p className='text-black text-14 font-suit'>{st}</p>
      </div>
      <div className='w-1'></div>
      <div className='w-14'>
        <p className='text-14 font-suit' style={{ color: "#FF3D00" }}>{time}</p>
      </div>
    </div>
  );
};

export default StationTime;
