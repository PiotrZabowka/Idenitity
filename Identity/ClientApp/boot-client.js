import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory } from 'react-router'
import routes from './routes';
import configureStore from './configure-store';

import './index.css'

const initialState = window.initialReduxState;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={ routes } />
  </Provider>,
  document.getElementById('react-app'),
)
