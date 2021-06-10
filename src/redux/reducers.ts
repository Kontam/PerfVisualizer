import { combineReducers } from 'redux';
import { categories } from './modules/categories';

const reducers = combineReducers({
  system: combineReducers({
    categories,
  }),
});

export default reducers;
