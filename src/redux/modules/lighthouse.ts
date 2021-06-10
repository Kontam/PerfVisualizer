import { handleActions, Action } from 'redux-actions';
import { Lighthouse } from '../types';
import { DataSet } from '../../components/types';

export const INITIAL_STATE: Lighthouse = [];

export const lighthouse = handleActions<Lighthouse, any>(
  {
    ['SUCCESS_GET_DATA']: (_, { payload }: Action<DataSet[]>) => {
      return payload.map((data) => ({
        dataId: data.id,
        datas: data.info,
      }));
    },
  },
  INITIAL_STATE
);
