import { Action, createAction, handleActions } from 'redux-actions';
import { DataSet } from '../../components/types';
import { CurrentChart } from '../types';

export const INITIAL_STATE: CurrentChart = {
  page: '',
  categoery: '',
};

const SELECT_PAGE = 'SELECT_PAGE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectPage = createAction<string>(SELECT_PAGE);
export const selectCategory = createAction<string>(SELECT_CATEGORY);

export const currentChart = handleActions<CurrentChart, any>(
  {
    ['SUCCESS_GET_DATA']: (state, { payload }: Action<DataSet[]>) => {
      return {
        ...state,
        page: payload.length ? payload[0].name : '',
      };
    },
    ['SELECT_PAGE']: (state, { payload }: Action<string>) => {
      return {
        ...state,
        page: payload,
      };
    },
    ['SELECT_CATEGORY']: (state) => {
      return { ...state };
    },
  },
  INITIAL_STATE
);
