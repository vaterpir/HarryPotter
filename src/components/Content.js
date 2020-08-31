import React, { useState } from 'react';

const sortAlfavit = (newData) => {
  return [...newData]
    .map((character) => {
      return character.name;
    })
    .sort()
    .map((name) => {
      return newData.filter((char) => {
        return char.name === name;
      });
    })
    .map((newChar) => newChar[0]);
};
const request = new XMLHttpRequest();
const baseURL = 'https://www.potterapi.com/v1/';
const keyURL = '$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';

const getMembers = (member, getName) => {
  const fullURL = `${baseURL}characters?key=${keyURL}&_id=${member}}`;
  request.open('GET', fullURL, true);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      //console.log(data);
      getName(data);
    } else {
      console.log('error');
    }
  };
  request.send();
};

//getMembers(member, getName);

const sortData = (newData, navOption, getName) => {
  if (navOption !== 'house') {
    const data = sortAlfavit(newData);
    return [...data].map((elem, index) => {
      return (
        <div className="table" key={index}>
          <div className="row">
            <div className="col">{elem.name}</div>
            <div className="col">{elem.house || '---'}</div>
            <div className="col">{elem.species || '---'}</div>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="table">
        <div className="row">
          {[...newData].map((charact, index) => {
            return (
              <div className="col" key={index}>
                <div>{charact.name}</div>
                {}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export const Content = ({ newData, navOption }) => {
  const [name, getName] = useState('name');
  return (
    <div className="Content">
      {newData ? sortData(newData, navOption, getName, name) : ''}
    </div>
  );
};
