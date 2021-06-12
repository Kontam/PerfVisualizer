import React from 'react';
import { Line } from 'react-chartjs-2';
import { useLineChart } from './useLineChart';

const Graph: React.FC = () => {
  const chartProps = useLineChart();
  return (
    <div className="max-w-80p w-10/12">
      <Line type="line" data={chartProps.data} />
    </div>
  );
};

export default Graph;
