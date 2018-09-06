import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './containers/App';

const router = (
  <Provider>
    <App />
  </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
