import React, { useState } from 'react';
import '../../styles/Navbar.css';

const request = new XMLHttpRequest();

const svgLogo = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
    <path
      d="M25.0794 10C23.931 10 23 10.931 23 12.0794V19.9206C23 21.069 23.931 22 25.0794 22C26.0053 22 26.7222 21.4775 27.2302 20.4326C27.7434 19.3764 28 17.8933 28 15.9831C28 14.0843 27.7434 12.6124 27.2302 11.5674C26.7222 10.5225 26.0053 10 25.0794 10Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="0"
        x2="33.0585"
        y2="1.13369"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E6BB8" />
        <stop offset="1" stopColor="#21CB8E" />
      </linearGradient>
    </defs>
  </svg>
);

const svgHome = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5233 8.94116H8.54418L13.1921 13.5891C13.3698 13.7667 13.6621 13.7812 13.8448 13.6091C14.983 12.5367 15.7659 11.0912 15.9957 9.46616C16.0351 9.18793 15.8042 8.94116 15.5233 8.94116ZM15.0577 7.03528C14.8154 3.52176 12.0077 0.714119 8.49418 0.471767C8.22595 0.453237 8.00006 0.679413 8.00006 0.948236V7.5294H14.5815C14.8504 7.5294 15.0762 7.30352 15.0577 7.03528ZM6.5883 8.94116V1.96206C6.5883 1.68118 6.34153 1.45029 6.06359 1.48971C2.55859 1.985 -0.120524 5.04705 0.00418193 8.71675C0.132417 12.4856 3.37742 15.5761 7.14801 15.5288C8.63036 15.5103 10.0001 15.0326 11.1262 14.2338C11.3586 14.0691 11.3739 13.727 11.1724 13.5256L6.5883 8.94116Z"
      fill="#B1B4C5"
    />
  </svg>
);

export const Navbar = ({ sort }) => {
  const zapros = (prop) => {
    request.open(
      'GET',
      `https://www.potterapi.com/v1/${prop}?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme`,
      true,
    );

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        sort(data, prop);
      } else {
        // error
        console.log('error');
      }
    };
    request.send();
  };

  return (
    <div className="Navbar">
      <div className="header">Sort Hogwards:</div>
      <div className="sortElem">
        <button onClick={() => zapros('characters')}>characters</button>
      </div>
      <div className="sortElem">
        <button onClick={() => zapros('houses')}>houses</button>
      </div>
      <div className="sortElem">
        <button onClick={() => zapros('spells')}>spells</button>
      </div>
    </div>
  );
};
