import { combineReducers } from 'redux';
import { pages } from './modules/pages';
import { categories } from './modules/categories';

const reducers = combineReducers({
  system: combineReducers({
    categories,
  }),
  data: combineReducers({
    pages,
  }),
});

export default reducers;
