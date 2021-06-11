import React from 'react';
import { Line } from 'react-chartjs-2';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { mergeByProperty } from '../../../util/mergeByProperty';

export function useLineChart() {
  const lighthouse = useSelector((state) => state.data.lighthouse);
  const pages = useSelector((state) => state.data.pages);
  const merged = mergeByProperty(lighthouse, pages, 'dataId');
  const { query } = useRouter();

  const currentGraphData = query.page
    ? merged.find((data) => data.name === query.page) || merged[0]
    : merged[0];

  const chartProps: React.ComponentProps<typeof Line> = {
    type: 'line',
    data: {
      labels: [...currentGraphData.datas.map((item) => item.date)],
      datasets: [
        {
          label: [...currentGraphData.datas.map((item) => item.date)],
          data: [
            ...currentGraphData.datas.map(
              (item) => item.data.performance.score
            ),
          ],
        },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  };

  return chartProps;
}
