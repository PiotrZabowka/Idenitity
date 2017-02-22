import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import createRoutes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={createRoutes()} >
  </Router>,
  document.getElementById('react-app'));
