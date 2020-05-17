import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import thunk from 'redux-thunk'


import loginReducers from './reducer/loginReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    loginReducers,
  }),
  composeEnhancers(applyMiddleware(promise, thunk))
)

export {store}