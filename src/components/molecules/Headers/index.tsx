import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentBase from './Headers';

const Headers: React.FC = () => {
  const pages = useSelector((state) => state.data.pages);
  const dispatch = useDispatch();
  return <ComponentBase pages={pages} dispatch={dispatch} />;
};

export default Headers;
