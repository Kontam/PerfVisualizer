import React from 'react';
import Graph from '../../molecules/Graph';

type Props = {
  graphs: any[];
};

const ChartList: React.FC<Props> = (props) => {
  return (
    <div>
      <Graph data={props.graphs[0]} />
    </div>
  );
};

export default ChartList;
