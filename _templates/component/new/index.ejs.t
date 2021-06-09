---
to: <%= component%>/index.tsx 
---
import React from 'react';
import ComponentBase from './<%= component%>';

const <%= component%>: React.FC = () => {
  return (
    <ComponentBase />
  );
};

export default <%= component%>;
