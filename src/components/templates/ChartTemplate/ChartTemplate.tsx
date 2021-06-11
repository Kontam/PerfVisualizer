import React from 'react';
import Headers from '../../molecules/Headers';

const ChartTemplate: React.FC = (props) => {
  return (
    <div>
      <Headers />
      {props.children}
    </div>
  );
};

export default ChartTemplate;
