import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import ChartList from '../../components/organisms/ChartList';
import ChartTemplate from '../../components/templates/ChartTemplate/ChartTemplate';
import { getDataSet } from '../../util/getDataSet';
import { useDispatch } from 'react-redux';
import { successGetData } from '../../redux/modules/pages';

const Chart: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    const dispatch = useDispatch();
    dispatch(successGetData(props.datasets));
    return (
      <div>
        <ChartTemplate>
          <ChartList />
        </ChartTemplate>
      </div>
    );
  };

export const getServerSideProps: GetServerSideProps = async () => {
  const datasets = getDataSet();
  return { props: { datasets } };
};

export default Chart;
