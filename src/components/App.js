import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Content } from './Content';

import '../styles/App.css';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
};
