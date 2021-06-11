import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import ChartList from '../../components/organisms/ChartList';
import { useGraph } from './useGraph';
import { useGlobalState } from './useGlobalState';
import ChartTemplate from '../../components/templates/ChartTemplate/ChartTemplate';

const Chart: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    useGlobalState(props.datasets);
    return (
      <div>
        <ChartTemplate>
          <ChartList />
        </ChartTemplate>
      </div>
    );
  };

export const getServerSideProps: GetServerSideProps = async () => {
  const datasets = useGraph();
  return { props: { datasets } };
};

export default Chart;
