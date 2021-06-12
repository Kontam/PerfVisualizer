import React from 'react';
import ContentContainer from '../../atoms/ContentContainer/ContentContainer';
import Headers from '../../molecules/Headers';

const ChartTemplate: React.FC = (props) => {
  return (
    <div>
      <Headers />
      <ContentContainer>{props.children}</ContentContainer>
    </div>
  );
};

export default ChartTemplate;
