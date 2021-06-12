import { TrackingInfo } from '../components/types';

// module types
export type CurrentChart = {
  page: string;
  categoery: string;
};

export type LighthouseItem = {
  dataId: string;
  datas: TrackingInfo[];
};
export type Lighthouse = LighthouseItem[];

export type Page = {
  dataId: string;
  name: string;
};
export type Pages = Page[];

export type Category = { name: 'Performance' };
export type Categories = Category[];
