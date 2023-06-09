import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SplashPage from './pages/Splash/SplashPage';
import MainPage from './pages/Main/MainPage';
import SelectPage from './pages/Main/PathSelectPage';
import SelectStationPage from './pages/Main/StationSelectPage';
import RouteInfo from './pages/Main/SelectRouteInfoPage';
import StarPage from './pages/Star/StarPage';
import CallPage from './pages/Call/CallPage';
import AdminHomePage from './pages/Admin/AdminHomePage';
import NotFound from './pages/NotFoundPage';
import StationInfoPage from './pages/Station/StationInfoPage';
import StationInfoSelectPage from './pages/Station/StationInfoSelectPage'; 
import './firebase-messaging-sw.js';

import './App.css';
import CallDetailPage from './pages/Admin/CallDetailPage';
import CallHistoryPage from './pages/Admin/CallHistoryPage';
import CallCompletePage from './pages/Call/CallCompletePage';

function App() {
  const location = useLocation();
  const showNavbar =
    location.pathname !== '/' &&
    location.pathname !== '/routeinfo' &&
    location.pathname !== '/result' &&
    !location.pathname.includes('/call')&&
    !location.pathname.includes('/stationinfo/');
  return (
    <div className='App flex flex-col w-screen min-h-screen'>
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<SplashPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/select' element={<SelectPage />} />
          <Route path='/arrive' element={<SelectStationPage />} />
          <Route path='/departure' element={<SelectStationPage />} />
          <Route path='/routeinfo' element={<RouteInfo />} />
          <Route path='/star' element={<StarPage />} />
          <Route path='/call' element={<CallPage />} />
          <Route path='/stationinfoselect' element={<StationInfoSelectPage />} />
          <Route path='/stationinfo/:line/:name' element={<StationInfoPage />} />
          <Route path='/call/:id' element={<CallDetailPage />} />
          <Route path='/admin' element={<AdminHomePage />} />
          <Route path='/admin/history' element={<CallHistoryPage />} />
          <Route path='/result' element={<CallCompletePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {showNavbar && <Navbar className='h-[9.1vh]' />}
    </div>
  );
}

export default App;
