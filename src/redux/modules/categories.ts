import { createAction, handleActions } from 'redux-actions';

export const INITIAL_STATE = [{ name: 'Performance' }];

const SUCCESS_FETCH_CATEGORIES = 'SUCCESS_FETCH_CATEGORIES';
export const successFetchCategories = createAction(SUCCESS_FETCH_CATEGORIES);

export const categories = handleActions<any>(
  {
    ['CATEGORIES_FETCH_SUCCESS']: () => {
      return [];
    },
  },
  INITIAL_STATE
);
