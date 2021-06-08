import { readFileSync } from 'fs';
import { FileData, TrackingData } from '../components/types';

export function getDataFromJson(path: string) {
  const fileStr = readFileSync(path).toString();
  const json = JSON.parse(fileStr) as FileData;

  const data: TrackingData = {
    performance: {
      score: json.categories.performance.score * 100,
    },
  };

  return data;
}
