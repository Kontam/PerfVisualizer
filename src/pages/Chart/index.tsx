import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import ChartList from '../../components/organisms/ChartList';
import { useGraph } from './useGraph';
import { useGlobalState } from './useGlobalState';

const Chart: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    useGlobalState(props.datasets);
    return (
      <div>
        <ChartList />
      </div>
    );
  };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const datasets = useGraph();
  return { props: { datasets } };
};

export default Chart;
