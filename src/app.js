
import React, {Component} from 'react';
import {HighchartsProvider} from 'react-highcharts-wrapper';

import NavBar from './components/navbar';
import Hero from './components/hero';
import SnapshotValue from './components/snapshotValue';
import Footer from './components/footer';

import './app.scss';


class App extends Component {
  render() {
    return (
      <div className="layout-documentation">
        <HighchartsProvider>
          <div>
            <NavBar />

            <Hero />

            <section className="section">
              <div className="container">
                <SnapshotValue />
              </div>
            </section>

            <Footer />
          </div>
        </HighchartsProvider>
      </div>
    );
  }
}

export default App;
