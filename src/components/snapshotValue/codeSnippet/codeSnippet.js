
import React from 'react';
import {PrismCode} from "react-prism";

import style from './style.scss';


const CodeSnippet = () => {
  return (
    <div className={style.bdExample}>
      <pre>
        <PrismCode className="language-javascript">
          {`
  import React from 'react';
  import {AbstractChart} from 'react-highcharts-wrapper';

  const PieChart = () => (
    <AbstractChart config={{
      chart: {
        type: 'pie'
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
          {name: 'Internet Explorer', y: 56.33},
          {name: 'Chrome', y: 24.03},
          {name: 'Firefox', y: 10.38},
          {name: 'Safari', y: 4.77},
          {name: 'Other', y: 0.2}
        ]
      }],
    }} />
  );
          `}
        </PrismCode>
      </pre>
    </div>
  )
};

export default CodeSnippet;

