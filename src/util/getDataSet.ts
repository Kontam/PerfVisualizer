import glob from 'glob';
import { DataSet } from '../components/types';
import { getDataFromJson } from './getDataFromJson';

export function getDataSet() {
  const result = glob.sync('**/static/data/**/*.json');

  const pattern = /static\/data\/(.*)\/(.*)_(.*)\.json/;

  const datasets: DataSet[] = [];

  result.forEach((path) => {
    const match = path.match(pattern);
    const data = getDataFromJson(path);
    if (!datasets.some((data) => data.name === match[1])) {
      datasets.push({
        name: match[1],
        info: [{ hash: match[2], date: match[3], data }],
      });
      return;
    }
    datasets
      .find((set) => set.name === match[1])
      .info.push({ hash: match[2], date: match[3], data });
  });

  return datasets;
}
