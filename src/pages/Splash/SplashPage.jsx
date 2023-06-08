import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  }, [navigate]);

  return (
    <div className='flex w-screen h-screen flex-col justify-between bg-my-green'>
      <div></div>
      <div className='flex flex-col items-center'>
        <p className='p1b text-white'>모든 이동이 즐거움으로 변한다</p>
        <p className='h1b text-white' style={{fontSize: "40px"}}>모두의 지하철</p>
        <img src={logo} alt="SubwayLogo" className='w-24 h-24' />
      </div>
      <div></div>
    </div>
  );
};

export default SplashPage;