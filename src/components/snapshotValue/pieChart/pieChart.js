
import React from 'react';
import {AbstractChart} from 'react-highcharts-wrapper';


const win = typeof window !== 'undefined' ? window : global;

const PieChart = () => {
  return (
    <AbstractChart config={{
      chart: {
        type: 'pie',
        width: win.innerWidth < 700 ? 400 : 550,
      },
      title: {
        text: '',
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
  )
};

export default PieChart;
