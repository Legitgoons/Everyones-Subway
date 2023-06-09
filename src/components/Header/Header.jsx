import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderBack } from '../../assets/images/headerBack.svg';

const Header = ({ pageName, canBackward }) => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBackward = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  return (
    <div>
      <div className='h-[7.25vh] px-3.5 bg-p1 w-screen flex items-center justify-center'>
        {canBackward && (
          <button onClick={onClickBackward} className='w-1/6'>
            <HeaderBack></HeaderBack>
          </button>
        )}
        <div className='w-4/6 text-white text-18 font-semibold text-center'>
          {pageName}
        </div>
        {canBackward && <div className='w-1/6'></div>}
      </div>{' '}
      <div className='h-6'></div>
    </div>
  );
};

export default Header;
