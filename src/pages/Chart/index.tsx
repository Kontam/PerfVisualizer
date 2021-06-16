import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import ChartList from '../../components/organisms/ChartList';
import ChartTemplate from '../../components/templates/ChartTemplate/ChartTemplate';
import { getDataSet } from '../../util/getDataSet';
import { useDispatch } from 'react-redux';
import { successGetData } from '../../redux/modules/pages';

const Chart: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const dispatch = useDispatch();
  dispatch(successGetData(props.datasets));
  return (
    <ChartTemplate>
      <ChartList />
    </ChartTemplate>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datasets = getDataSet();
  return { props: { datasets } };
};

export default Chart;
