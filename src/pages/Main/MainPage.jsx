import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {

  return (
    <div className='w-screen flex items-end'>
      <NavLink to="/select">
        <button className='flex w-80 h-14 justify-center items-center bg-my-green rounded-xl'>
          경로 설정
        </button>
      </NavLink>
    </div>
  );
};

export default MainPage;
