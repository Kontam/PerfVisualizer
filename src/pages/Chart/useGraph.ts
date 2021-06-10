import { getDataSet } from '../../util/getDataSet';

export function useGraph() {
  const dataset = getDataSet();

  const graphs = dataset.map((data) => ({
    labels: [...data.info.map((d) => d.hash)],
    datasets: [
      {
        label: [...data.info.map((d) => d.date)],
        data: [...data.info.map((d) => d.data.performance.score)],
      },
    ],
  }));

  return graphs;
}
