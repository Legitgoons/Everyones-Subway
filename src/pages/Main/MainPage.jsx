import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { initStationState } from '../../store';
import Button from '../../components/common/Button';

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
        <Button>
          경로 설정
        </Button>
      </NavLink>
    </div>
  );
};

export default MainPage;
