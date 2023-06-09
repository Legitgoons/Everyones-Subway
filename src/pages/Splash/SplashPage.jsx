import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  }, [navigate]);

  return (
    <div className="flex w-screen h-screen flex-col justify-between bg-p1">
      <div></div>
      <div className="flex flex-col items-center">
        <p className="p1b text-white">모든 이동이 즐거움으로 변한다</p>
        <p className="font-jalnan text-white" style={{ fontSize: "36px" }}>
          모두의 지하철
        </p>
        <Logo className="w-24 h-24" />
      </div>
      <div></div>
    </div>
  );
};

export default SplashPage;
