import React, { useState } from 'react';

const tableLis = (dataSort, propSort) =>
  [...dataSort].map((character, index) => {
    return (
      <div key={index} className="col">
        <div className="row index">{index}</div>
        <div className="row">{character.name}</div>
        <div className="row">{character.house}</div>
        <div className="row">{character.bloodStatus}</div>
        <div className="row">{character.patronus}</div>
        <div className="row">{character.species}</div>
        <div className="row">{character.bloodStatus}</div>
        <div className="row">{character.patronus}</div>
        <div className="row">{character.species}</div>
      </div>
    );
  });

export const Content = ({ dataSort, propSort }) => {
  return (
    <div className="Content">
      <div className="table">
        {dataSort ? tableLis(dataSort, propSort) : ''}
      </div>
    </div>
  );
};
