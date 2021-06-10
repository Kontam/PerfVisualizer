import React from 'react';
import { Line } from 'react-chartjs-2';
import { useLineChart } from './useLineChart';

type Props = {
  data: any;
};

const Graph: React.FC<Props> = (props) => {
  const chartProps = useLineChart(props);
  return <Line data={chartProps.data} />;
};

export default Graph;
