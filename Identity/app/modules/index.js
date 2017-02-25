import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';

const todoApp = combineReducers({
  routing: routerReducer,
  auth
});

export default todoApp;
