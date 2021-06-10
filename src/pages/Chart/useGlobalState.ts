import { DataSet } from '../../components/types';
import { useDispatch } from 'react-redux';
import { successGetData } from '../../redux/modules/pages';

export function useGlobalState(datasets: DataSet[]) {
  const dispatch = useDispatch();
  dispatch(successGetData(datasets));
}
