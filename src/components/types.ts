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

export type HeaderLink = {
  id: string;
  name: string;
  href: string;
};

export type LargeHeaderLink = {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: (arg: any) => JSX.Element;
};

export type FileData = typeof json;
