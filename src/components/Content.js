import React, { useState } from 'react';

const tableLis = (dataSort, propSort) => {
  return [...dataSort].map((character, index) => {
    return (
      <div className="table">
        <div key={index} className="col">
          <div className="row index">{index}</div>
          <div className="row">{character.name}</div>
          <div className="row">{character.house || '---'}</div>
          <div className="row">{character.bloodStatus}</div>
        </div>
      </div>
    );
  });
};

export const Content = ({ newData }) => {
  const [mainData, setMainData] = useState('');
  tableLis(newData);
  return <div className="Content">{newData ? mainData : ''}</div>;
};
