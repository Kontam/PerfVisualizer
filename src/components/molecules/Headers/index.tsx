import React from 'react';
import { useSelector } from 'react-redux';
import ComponentBase from './Headers';

const Headers: React.FC = () => {
  const pages = useSelector((state) => state.data.pages);
  return <ComponentBase pages={pages} />;
};

export default Headers;
