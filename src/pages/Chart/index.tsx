import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import ChartList from '../../components/organisms/ChartList';
import { useGraph } from './useGraph';

const Chart: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    return (
      <div>
        <ChartList graphs={props.graphs} />
      </div>
    );
  };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const graphs = useGraph();
  return { props: { graphs } };
};

export default Chart;
