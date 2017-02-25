import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';

import configureStore from './configureStore';
import createRoutes from './routes';

const store = configureStore({}, browserHistory);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={createRoutes(store)} />
  </Provider>,
  document.getElementById('react-app'));
