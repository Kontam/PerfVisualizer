import React from 'react';
import { Line } from 'react-chartjs-2';
import { useLineChart } from './useLineChart';

const Graph: React.FC = () => {
  const chartProps = useLineChart();
  return <Line data={chartProps.data} />;
};

export default Graph;
