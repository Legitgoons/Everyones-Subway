import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { initStationState } from '../../store';
import Button from '../../components/common/Button';
import { ReactComponent as SubwayMap } from '../../assets/images/subwayMap.svg';

const MainPage = () => {
  const dispatch = useDispatch();
  const initialize = () => {
    dispatch(initStationState());
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className='w-screen flex justify-center'>
      <div className='h-72 -z-20'>
        <SubwayMap />
      </div>
      <NavLink to='/select'>
        <div className='absolute flex bottom-24 left-5 justify-center'>
          <Button>경로 설정</Button>
        </div>
      </NavLink>
    </div>
  );
};

export default MainPage;
