import { combineReducers } from 'redux';
import { currentChart } from './modules/currentChart';
import { lighthouse } from './modules/lighthouse';
import { pages } from './modules/pages';
import { categories } from './modules/categories';

const reducers = combineReducers({
  app: combineReducers({
    currentChart,
  }),
  system: combineReducers({
    categories,
  }),
  data: combineReducers({
    lighthouse,
    pages,
  }),
});

export default reducers;
