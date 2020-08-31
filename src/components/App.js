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
  const [navOption, setNavOption] = useState('');

  const getData = (mainURL, option, extra) => {
    const fullURL = `${baseURL}${mainURL}?key=${keyURL}${
      option !== extra ? `&${option}=${extra}` : '&'
    }`;
    console.log(fullURL);
    request.open('GET', fullURL, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        setNavOption(extra);
        setNewData(data);
      } else {
        console.log('error');
      }
    };
    request.send();
  };
  return (
    <div className="App">
      <Navbar getData={getData} />
      <Content newData={newData} navOption={navOption} />
      <Specifications />
    </div>
  );
};
/*   const sortNewData = (oldDate, option) => {
    if (option === 'characters') {
    } else {
    }
  }; */
