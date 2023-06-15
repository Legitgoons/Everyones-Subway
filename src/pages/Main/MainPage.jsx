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
    <div className='w-screen h-[87vh] flex justify-center'>
      <SubwayMap className='h-full -z-20 absolute' />
      <NavLink to='/select' className={`self-end`}>
        <Button>경로 설정</Button>
      </NavLink>
    </div>
  );
};

export default MainPage;
