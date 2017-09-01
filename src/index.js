
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

require('prismjs');
require('prismjs/themes/prism.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
