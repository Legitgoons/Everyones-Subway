import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import SplashPage from "./pages/Splash/SplashPage"
import MainPage from "./pages/Main/MainPage"
import SelectPage from "./pages/Main/SelectPage";
import NotFound from "./pages/NotFoundPage";

import './App.css';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <div className="App w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNavbar && <Navbar />}
    </div>
  );
}

export default App;