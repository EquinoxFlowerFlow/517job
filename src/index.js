import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Route from '@/router/router'
import { store } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import './index.css';
import './style-p.css'

ReactDOM.render(
  <Provider store = { store }>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Route />
    </PersistGate>
  </Provider>,
document.getElementById('root')
);

