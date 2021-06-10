import { createAction, handleActions } from 'redux-actions';
import { Categories } from '../types';


export const INITIAL_STATE: Categories = [{ name: 'Performance' }];

const SUCCESS_FETCH_CATEGORIES = 'SUCCESS_FETCH_CATEGORIES';
export const successFetchCategories = createAction(SUCCESS_FETCH_CATEGORIES);

export const categories = handleActions<Categories, any>(
  {
    ['CATEGORIES_FETCH_SUCCESS']: () => {
      return [];
    },
  },
  INITIAL_STATE
);
