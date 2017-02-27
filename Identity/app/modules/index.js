import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

const todoApp = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth,
});

export default todoApp;
