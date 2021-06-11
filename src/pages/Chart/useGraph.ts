import { getDataSet } from '../../util/getDataSet';

export function useGraph() {
  console.log('datasets start');
  const datasets = getDataSet();
  console.log('datasets end', datasets);
  return datasets;
}
