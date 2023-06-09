import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="w-screen h- flex items-end">
      <NavLink to="/select">
        <button className="flex w-80 h-14 justify-center items-center bg-p1 rounded-xl">
          경로 설정
        </button>
      </NavLink>
    </div>
  );
};

export default MainPage;
