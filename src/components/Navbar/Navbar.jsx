import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ReactComponent as FooterHome } from '../../assets/images/footerHome.svg';
import { ReactComponent as FooterHomeOn } from '../../assets/images/footerHomeOn.svg';
import { ReactComponent as FooterStar } from '../../assets/images/footerStar.svg';
import { ReactComponent as FooterStarOn } from '../../assets/images/footerStarOn.svg';
import { ReactComponent as FooterInfo } from '../../assets/images/footerInfo.svg';
import { ReactComponent as FooterInfoOn } from '../../assets/images/footerInfoOn.svg';
import { ReactComponent as FooterMyinfo } from '../../assets/images/footerMyinfo.svg';
import { ReactComponent as FooterMyinfoOn } from '../../assets/images/footerMyinfoOn.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkCurrentPath = (paths) => {
    return paths.includes(location.pathname);
  };

  const handleHomeClick = () => navigate('/main');
  const handleStarClick = () => navigate('/star');
  const handleInfoClick = () => {};
  //임시로 관리자페이지로 이동
  const handleMyinfoClick = () => {
    navigate('/admin');
  };

  return (
    <div className='h-[9.1vh] justify-self-end w-screen flex items-center justify-around bg-white'>
      <button onClick={handleHomeClick}>
        {checkCurrentPath(['/main', '/select']) ? (
          <FooterHomeOn />
        ) : (
          <FooterHome />
        )}
      </button>
      <button onClick={handleStarClick}>
        {checkCurrentPath(['/star']) ? <FooterStarOn /> : <FooterStar />}
      </button>
      <button onClick={handleInfoClick}>
        {checkCurrentPath(['/info']) ? <FooterInfoOn /> : <FooterInfo />}
      </button>
      <button onClick={handleMyinfoClick}>
        {checkCurrentPath(['/myInfo']) ? <FooterMyinfoOn /> : <FooterMyinfo />}
      </button>
    </div>
  );
};

export default Navbar;
