
import React from 'react';

import CodeSnippet from './codeSnippet';
import PieChart from './pieChart';

import style from './style.scss';


const SnapshotValue = () => {
  return (
    <div className={style.snapshotValue}>
      <div className="columns">
        <div className="column is-5">
          <CodeSnippet />
        </div>
        <div className="column is-7">
          <div className="card is-shadowless">
            <div className="card-content">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SnapshotValue;
