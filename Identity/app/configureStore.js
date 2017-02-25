import rootReducer from './modules';
import thunk from 'redux-thunk';
import routes from './routes';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState, history) {
    let createStoreWithMiddleware;

    const logger = createLogger();

    const router = routerMiddleware(history);

    const middleware = applyMiddleware(thunk, logger, router);

    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(middleware));

    if (module.hot) {
        module.hot
            .accept('./modules', () => {
                const nextRootReducer = require('./modules/index');
                store.replaceReducer(nextRootReducer);
            });
    }

    return store;

}
