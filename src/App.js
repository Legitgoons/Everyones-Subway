import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SplashPage from './pages/Splash/SplashPage';
import MainPage from './pages/Main/MainPage';
import SelectPage from './pages/Main/PathSelectPage';
import SelectStationPage from './pages/Main/StationSelectPage';
import RouteInfo from './pages/Main/SelectRouteInfoPage';
import StarPage from './pages/Star/StarPage';
import NotFound from './pages/NotFoundPage';

import './App.css';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/routeinfo';

  return (
    <div className='App flex flex-col w-screen min-h-screen '>
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<SplashPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/select' element={<SelectPage />} />
          <Route path='/arrive' element={<SelectStationPage />} />
          <Route path='/departure' element={<SelectStationPage />} />
          <Route path='/routeinfo' element={<RouteInfo />} />
          <Route path='/star' element={<StarPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {showNavbar && <Navbar className='h-[9.1vh]' />}
    </div>
  );
}

export default App;
