import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Specifications } from './Specifications';
import { Content } from './Content';

import '../styles/App.css';

export const App = () => {
  const [dataSort, setDataSort] = useState('');
  const [propSort, setPropSort] = useState('');

  const sortData = (data, prop) => {
    console.log(data);
    if (prop === 'characters') {
      const newData = [...data]
        .map((character) => {
          return character.name;
        })
        .sort()
        .map((name) => {
          return data.filter((char) => {
            return char.name === name;
          });
        })
        .map((newChar) => newChar[0]);
      setDataSort(newData);
      setPropSort(prop);
    } else {
      setDataSort(data);
      setPropSort(prop);
    }
  };
  return (
    <div className="App">
      <Navbar sortData={sortData} />
      <Content dataSort={dataSort} propSort={propSort} />
      <Specifications />
    </div>
  );
};
