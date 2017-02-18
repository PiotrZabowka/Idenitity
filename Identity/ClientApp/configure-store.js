import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer } from 'react-router-redux';

// Import the index reducer and sagas
import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

export default function configureStore(initialState) {

    // Setup the middleware to watch between the Reducers and the Actions
    const sagaMiddleware = createSagaMiddleware()

    // Redux DevTools - completely optional, but this is necessary for it to
    // work properly with redux saga.  Otherwise you'd just do:
    //
    // const store = createStore(
    //   IndexReducer,
    //   applyMiddleware(sagaMiddleware)
    // )

    /*eslint-disable */
    const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
    /*eslint-enable */

    const store = createStore(
      buildRootReducer(IndexReducer),
      composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
    )

    // Begin our Index Saga
    sagaMiddleware.run(IndexSagas)


    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./index-reducer', () => {
            const nextRootReducer = require('./index-reducer');
            store.replaceReducer(buildRootReducer(nextRootReducer));
        });
    }

    return store;
}

function buildRootReducer(allReducers) {
    return combineReducers(Object.assign({}, allReducers, { routing: routerReducer }));
}
