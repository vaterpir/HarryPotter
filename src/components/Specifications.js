import React, { useState } from 'react';

const charact = () => (
  <div className="propChar">
    <div className="specCharacter">
      <div>Name:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>House:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Blood status:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Role:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>School:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Species:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Ministry Of Magic:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Order Of The Phoenix:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Dumbledores Army:</div>
      <div></div>
    </div>
    <div className="specCharacter">
      <div>Death Eater:</div>
      <div></div>
    </div>
  </div>
);

export const Specifications = ({ character }) => {
  return (
    <div className="Specifications">
      <div className="photoChar">
        <div></div>
      </div>
    </div>
  );
};
