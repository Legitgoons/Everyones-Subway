import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderBack } from '../../assets/images/headerBack.svg';
import Horizon from '../common/Horizon';

const AdminHeader = ({ pageName, canBackward }) => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBackward = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='flex items-center'>
        <div className='h-[7.25vh] px-3.5 bg- g6 w-screen flex items-center justify-center'>
          {canBackward && (
            <button onClick={onClickBackward} className='w-1/6'>
              <HeaderBack className='fill-black'></HeaderBack>
            </button>
          )}
          <div className='w-4/6 text-g1 text-20 font-semibold text-center'>
            {pageName}
          </div>
          {canBackward && <div className='w-1/6'></div>}
        </div>
      </div>
      <div className='w-screen border-t'></div>
      <div className='h-8'></div>
    </>
  );
};

export default AdminHeader;
