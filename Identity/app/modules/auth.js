import axios from 'axios';

// Actions
const REQUEST_LOGIN = 'identity/auth/REQUEST_LOGIN';

// Reducer
export default function reducer(state = { token: null, userName: null, isAuthenticated: false }, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}


// Action Creators

export function requestLogin(values) {
  return { type: REQUEST_LOGIN, values };
}
