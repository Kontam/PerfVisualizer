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
        <ChartList graphs={props.graphs} />
      </div>
    );
  };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { graphs, datasets } = useGraph();
  return { props: { graphs, datasets } };
};

export default Chart;
