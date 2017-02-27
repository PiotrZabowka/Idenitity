import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './modules';

export default function configureStore(initialState, history) {
  const logger = createLogger();

  const router = routerMiddleware(history);

  const middleware = applyMiddleware(thunk, logger, router);

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line no-underscore-dangle, no-undef

  const store = createStore(rootReducer, initialState, composeEnhancers(middleware));
  console.log('state', store.getState());
  if (module.hot) {
    module.hot
            .accept('./modules', () => {
              const nextRootReducer = require('./modules/index'); // eslint-disable-line global-require
              store.replaceReducer(nextRootReducer);
            });
  }

  return store;
}
