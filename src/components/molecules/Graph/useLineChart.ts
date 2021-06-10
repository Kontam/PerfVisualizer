import React from 'react';
import { Line } from 'react-chartjs-2';

export function useLineChart(data: any) {
  const chartProps: React.ComponentProps<typeof Line> = {
    type: 'line',
    data: {
      ...data.data,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  };

  return chartProps;
}
