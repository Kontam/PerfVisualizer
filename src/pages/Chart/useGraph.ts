import { getDataSet } from '../../util/getDataSet';

export function useGraph() {
  const datasets = getDataSet();
  return datasets;
}
