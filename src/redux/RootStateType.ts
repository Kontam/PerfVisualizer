// prettier-ignore
import {
  CurrentChart,
  Pages,
  Lighthouse,
} from './types';

// hygenでinjectするため一番上に定義する
export type RootState = {
  app: {
    currentChart: CurrentChart;
  };
  data: {
    pages: Pages;
    lighthouse: Lighthouse;
  };
};

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
