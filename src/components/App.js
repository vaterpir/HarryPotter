import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Specifications } from './Specifications';
import { Content } from './Content';

import '../styles/App.css';

const request = new XMLHttpRequest();
const baseURL = 'https://www.potterapi.com/v1/';
const keyURL = '$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';

export const App = () => {
  const [newData, setNewData] = useState('');

  const sortNewData = (oldDate, option) => {
    if (option === 'characters') {
      const newData = [...oldDate]
        .map((character) => {
          return character.name;
        })
        .sort()
        .map((name) => {
          return oldDate.filter((char) => {
            return char.name === name;
          });
        })
        .map((newChar) => newChar[0]);
      setNewData(newData);
    } else {
      setNewData(oldDate);
    }
  };

  const getData = (mainURL, option) => {
    request.open('GET', `${baseURL}${mainURL}?key=${keyURL}`, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        setNewData(sortNewData(data, option));
      } else {
        console.log('error');
      }
    };
    request.send();
  };
  return (
    <div className="App">
      <Navbar getData={getData} />
      <Content newData={newData} />
      <Specifications />
    </div>
  );
};
