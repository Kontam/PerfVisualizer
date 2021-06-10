import { combineReducers } from 'redux';
import { lighthouse } from './modules/lighthouse';
import { pages } from './modules/pages';
import { categories } from './modules/categories';

const reducers = combineReducers({
  system: combineReducers({
    categories,
  }),
  data: combineReducers({
    lighthouse,
    pages,
  }),
});

export default reducers;
