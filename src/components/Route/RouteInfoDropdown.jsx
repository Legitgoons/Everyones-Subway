import React from 'react';
import LineIcon from '../Station/LineIcon';
import { Link } from 'react-router-dom';

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
  );
};

export default RouteInfoDropdown;