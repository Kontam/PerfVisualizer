import { getDataSet } from '../../util/getDataSet';

export function useGraph() {
  const datasets = getDataSet();

  const graphs = datasets.map((data) => ({
    labels: [...data.info.map((d) => d.hash)],
    datasets: [
      {
        label: [...data.info.map((d) => d.date)],
        data: [...data.info.map((d) => d.data.performance.score)],
      },
    ],
  }));

  return { graphs, datasets };
}
