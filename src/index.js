import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
// import store from './store';
import store1 from './store1';

console.log("index.js  src root folder----------")
ReactDOM.render(
  <Provider store={store1}>
    <App />  
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
