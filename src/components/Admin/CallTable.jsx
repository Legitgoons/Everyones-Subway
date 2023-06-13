import React from 'react';
import { useNavigate } from 'react-router-dom';
import CallState from '../common/CallState';

const CallTable = ({ callList }) => {
  const navigate = useNavigate();

  const handleClickDetail = (id) => () => {
    navigate(`/call/${id}`);
  };
  return (
    <table class='table-auto w-full'>
      <thead className='border-b'>
        <tr>
          <th className='text-center'>출발역</th>
          <th className='text-center'>내용</th>
          <th className='text-center'>현황</th>
        </tr>
        <div className='h-3'></div>
      </thead>
      <tbody>
        {callList.map((e) => {
          return (
            <tr className='h-14 border-b'>
              <td className='font-suit font-normal'>{e.dipartureTime}</td>
              <td
                className='font-suit font-normal'
                onClick={handleClickDetail(e.id)}
              >{`교통약자 이동호출 >`}</td>
              <td className='font-suit font-normal'>
                <CallState>{e.state}</CallState>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CallTable;
