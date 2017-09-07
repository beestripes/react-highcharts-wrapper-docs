
import React from 'react';

import BeeStripesLogo from './beestripes-logo.png';

import style from './style.scss';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.npmjs.com/package/react-highcharts-wrapper" target="_blank" rel="noopener noreferrer">
          <code>react-highcharts-wrapper</code>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://beestripes.io" target="_blank" rel="noopener noreferrer">
              <img src={BeeStripesLogo} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
