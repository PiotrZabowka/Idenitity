import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import { match, RouterContext } from 'react-router';


import routes from './routes';

export default createServerRenderer((params) => new Promise((resolve) => {
  match({ routes:routes(), location: params.location }, (error, redirectLocation, renderProps) => {
    if (error) {
      throw error;
    }
    resolve({
      html: renderToString(<RouterContext {...renderProps} />)
    });
  });
}));
