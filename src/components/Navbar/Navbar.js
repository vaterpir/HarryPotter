import React, { useState } from 'react';
import '../../styles/Navbar.css';

const houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
const spells = ['Charm', 'Enchantment', 'Hex', 'Spell', 'Curse'];

const createOptions = (pointMenu, getData, option, extra) => {
  return pointMenu.map((point, index) => {
    return (
      <div className="sortElem" key={index + 'menu'}>
        <button
          onClick={() =>
            getData(option, extra.toString().toLowerCase(), point.toString())
          }
        >
          {point.toString()}
        </button>
      </div>
    );
  });
};

export const Navbar = ({ getData }) => {
  return (
    <div className="Navbar">
      <div className="header">Sort Hogwards:</div>
      <div className="sortElem">
        <button onClick={() => getData('characters', 'character', 'character')}>
          characters
        </button>
      </div>
      <div className="sortElem">
        <button onClick={() => getData('characters', 'house', 'house')}>
          houses
        </button>
      </div>
      <div className="optionally">
        {createOptions(houses, getData, 'characters', 'house')}
      </div>
      {/*       <div className="sortElem">
        <button onClick={() => getData('spells', 'spells', 'spells')}>
          Spells
        </button>
      </div>
      <div className="optionally">
        {createOptions(spells, getData, 'spells', 'spell')}
      </div> */}
    </div>
  );
};

/* const zapros = (prop, opti) => {
  console.log(prop, opti);
  request.open('GET', `${baseURL}${prop}?key=${keyURL}`, true);

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
 */
