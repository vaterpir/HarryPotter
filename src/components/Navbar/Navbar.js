import React, { useState } from 'react';
import '../../styles/Navbar.css';

const request = new XMLHttpRequest();

export const Navbar = ({ sortData, propSort }) => {
  const zapros = (prop) => {
    request.open(
      'GET',
      `https://www.potterapi.com/v1/${prop}?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme`,
      true,
    );

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        sortData(data, prop);
      } else {
        console.log('error');
      }
    };
    request.send();
  };

  const optionallySort = (condition) => {
    console.log(condition);
  };

  return (
    <div className="Navbar">
      <div className="header">Sort Hogwards:</div>
      <div className="sortElem">
        <button onClick={() => zapros('characters')}>characters</button>
      </div>
      <div className="sortElem">
        <button
          onClick={() => {
            zapros('houses');
            optionallySort('houses');
          }}
        >
          houses
        </button>
      </div>
      <div className="optionally">
        <div className="sortElem">
          <button
            onClick={() => {
              return 1;
            }}
          >
            Gryffindor
          </button>
        </div>
        <div className="sortElem">
          <button
            onClick={() => {
              return 1;
            }}
          >
            Ravenclaw
          </button>
        </div>
        <div className="sortElem">
          <button
            onClick={() => {
              return 1;
            }}
          >
            Slytherin
          </button>
        </div>
        <div className="sortElem">
          <button
            onClick={() => {
              return 1;
            }}
          >
            Hufflepuff
          </button>
        </div>
      </div>
      <div className="sortElem">
        <button onClick={() => zapros('spells')}>spells</button>
      </div>
      <div className="optionally">
        <div className="sortElem">
          <button onClick={() => zapros('Charm')}>Charm</button>
        </div>
        <div className="sortElem">
          <button onClick={() => zapros('Enchantment')}>Enchantment</button>
        </div>
        <div className="sortElem">
          <button onClick={() => zapros('Hex')}>Hex</button>
        </div>
        <div className="sortElem">
          <button onClick={() => zapros('Spell')}>Spell</button>
        </div>
        <div className="sortElem">
          <button onClick={() => zapros('Curse')}>Curse</button>
        </div>
      </div>
    </div>
  );
};
