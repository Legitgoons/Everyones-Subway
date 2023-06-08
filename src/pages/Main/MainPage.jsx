import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {

  return (
    <div>
      <NavLink to="/select">
        <button>
          경로 설정
        </button>
      </NavLink>
    </div>
  );
};

export default MainPage;
