import React from 'react';
import { lineNameMap } from '../../constant/lineNum';

const RouteInfoLine = (line) => {
  return (
    <div
      className={`${`bg-l${lineNameMap[line]}`} w-1 h-4 border border-8px border-solid`}
    />
  );
};

export default RouteInfoLine;