import { combineReducers } from 'redux';
import { categories } from './modules/categories';

const reducers = combineReducers({
  categories,
});

export default reducers;
