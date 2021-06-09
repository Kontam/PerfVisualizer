---
to: <%= path%>/<%= component%>/<%= component%>.tsx 
---

import React from 'react';

export type Props = {};

const <%= component%>: React.FC<Props> = (props) => {
  return (
    <div>content</div>
  );
};

export default <%= component%>;
