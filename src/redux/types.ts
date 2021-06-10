import { TrackingInfo } from '../components/types';

// module types
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

export type RootState = {
  data: {
    pages: Pages;
    lighthouse: Lighthouse;
  };
};

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
