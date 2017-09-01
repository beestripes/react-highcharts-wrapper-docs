
import React from 'react';

import style from './style.scss';


const Hero = () => {
  return (
    <section className={`hero is-dark ${style.mainHero}`}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            A React wrapper for building Highcharts components.
          </p>
          <p><code>npm install react-highcharts-wrapper</code></p>
        </div>
      </div>
    </section>
  )
};

export default Hero;
