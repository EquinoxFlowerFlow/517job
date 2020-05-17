import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Route from '@/router/router'
import { store } from './store'
import './index.css';
import './style-p.css'

ReactDOM.render(
  <Provider store = { store }>
    <Route />
  </Provider>,
document.getElementById('root')
);

