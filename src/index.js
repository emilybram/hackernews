import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'font-awesome/css/font-awesome.min.css';
require('./index.css');

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

if (module.hot) {
    module.hot.accept()
  }