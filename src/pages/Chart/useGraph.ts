import { getDataSet } from '../../util/getDataSet';

export function useGraph() {
  const dataset = getDataSet();

  const graphs = dataset.map((data) => ({
    labels: [...data.info.map((d) => d.hash)],
    datasets: [
      {
        label: [...data.info.map((d) => d.date)],
        data: [...data.info.map((d) => d.data.performance.score)],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }));

  return graphs;
}
