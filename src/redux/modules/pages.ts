import { createAction, handleActions, Action } from 'redux-actions';
import { Pages } from '../types';
import { DataSet } from '../../components/types';

export const INITIAL_STATE: Pages = [];

const SUCCESS_GET_DATA = 'SUCCESS_GET_DATA';

export const successGetData = createAction<DataSet[]>(SUCCESS_GET_DATA);

export const pages = handleActions<Pages, any>(
  {
    ['SUCCESS_GET_DATA']: (_, { payload }: Action<DataSet[]>) => {
      return payload.map((data) => ({
        dataId: data.id,
        name: data.name,
      }));
    },
  },
  INITIAL_STATE
);
