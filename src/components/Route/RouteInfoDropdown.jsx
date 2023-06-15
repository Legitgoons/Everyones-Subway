import React from 'react';
import LineIcon from '../Station/LineIcon';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const RouteInfoDropdown = ({ dropdownOpen, setDropdownOpen, routes, lineNameMap }) => {
  return (
    <React.Fragment>
      {dropdownOpen && (
        <div
          className='fixed inset-0 z-10'
          onClick={() => setDropdownOpen(false)}
        />
      )}
      {dropdownOpen && (
        <ul className='w-full dropdown-menu absolute bottom-full mb-2 p1b text-black z-30'>
          {routes.map((route, index) => {
            const url = `/stationinfo/${route.line}/${route.name}`;
            return (
              <li className='h-[8vh] flex items-center justify-center' key={index}>
                <Link
                  to={url}
                  className='flex justify-center items-center w-4/5 h-5/6 bg-white shadow-dropTop rounded-25'
                >
                  <LineIcon line={lineNameMap[route.line]} className='mr-1' />
                  {route.name}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </React.Fragment>
=======
const RouteInfoDropdown = ({dropdownOpen, setDropdownOpen, routes, lineNameMap}) => {
  return (
    <React.Fragment>
    {dropdownOpen && (
      <div
        className='fixed inset-0 z-10'
        onClick={() => setDropdownOpen(false)}
      />
    )}
    {dropdownOpen && (
      <ul className='w-full dropdown-menu absolute bottom-full mb-2 p1b text-black'>
        {routes.map((route, index) => (
          <li className='h-[8vh] flex items-center justify-center' key={index}>
            <Link
              to={{
                pathname: '/stationinfo',
                state: { line: route.line, name: route.name }
              }}
              className='flex justify-center items-center w-4/5 h-5/6 bg-white shadow-dropTop rounded-25'
            >
              <LineIcon line={lineNameMap[route.line]} className='mr-1' />
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </React.Fragment>
>>>>>>> 9578ad24bb9d00d0b697a9a95be346cbe40d450d
  );
};

export default RouteInfoDropdown;