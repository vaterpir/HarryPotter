import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Content } from './Content';

import '../styles/App.css';

export const App = () => {
  const [dataSort, setDataSort] = useState('');
  const [propSort, setPropSort] = useState('');

  const sort = (data, prop) => {
    setDataSort(data);
    setPropSort(prop);
  };
  return (
    <div className="App">
      <Navbar sort={sort} />
      <Content dataSort={dataSort} propSort={propSort} />
    </div>
  );
};
