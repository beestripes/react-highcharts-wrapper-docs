
import React from 'react';

import './style.scss';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p className="italic is-size-7">
            The charts used by react-highcharts-wrapper and in this demo site are powered by <a href="https://www.highcharts.com/" target="_blank" className="has-text-info">Highcharts JS</a> which is provided under a <a href="https://creativecommons.org/licenses/by-nc/3.0/" target="_blank" className="has-text-info">CC BY-NC 3.0 licence</a>.
          </p>
          <p>
            <a className="icon has-text-info" href="https://github.com/beestripes/react-highcharts-wrapper">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

