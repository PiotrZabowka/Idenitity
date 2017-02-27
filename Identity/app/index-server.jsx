import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createMemoryHistory from 'history/lib/createMemoryHistory';


import configureStore from './configureStore';
import routes from './routes';

export default createServerRenderer(params => new Promise((resolve) => {
  console.log(params);
  const memoryHistory = createMemoryHistory();
  const store = configureStore(params.data, memoryHistory);
  // Create an enhanced history that syncs navigation events with the store
  syncHistoryWithStore(memoryHistory, store);

  match({ routes: routes(store), location: params.location },
    (error, redirectLocation, renderProps) => {
      if (error) {
        throw error;
      }
      resolve({
        html: renderToString(
          <Provider store={store}><RouterContext {...renderProps} /></Provider>,
      ),
        globals: {
          __PRELOADED_STATE__: store.getState(),
        },
      });
    });
}));
