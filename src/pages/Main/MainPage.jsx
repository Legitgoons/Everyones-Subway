import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { initStationState } from '../../store';

const MainPage = () => {
  const dispatch = useDispatch();
  const initialize = () => {
    dispatch(initStationState());
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className='w-screen flex items-end'>
      <NavLink to='/select'>
        <button className='flex w-80 h-14 justify-center items-center bg-p1 rounded-xl'>
          경로 설정
        </button>
      </NavLink>
    </div>
  );
};

export default MainPage;
