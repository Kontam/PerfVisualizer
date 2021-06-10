import json from '../../static/sample.json';
export type Info = {
  hash: string;
  date: string;
  data: TrackingData;
};

export type DataSet = {
  id: string;
  name: string;
  info: Info[];
};

export type TrackingData = {
  performance: {
    score: number;
  };
};

export type FileData = typeof json;
