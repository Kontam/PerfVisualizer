import json from '../../static/sample.json';
export type TrackingInfo = {
  hash: string;
  date: string;
  data: TrackingData;
};

export type DataSet = {
  id: string;
  name: string;
  info: TrackingInfo[];
};

export type TrackingData = {
  performance: {
    score: number;
  };
};

export type FileData = typeof json;
