import React from 'react';
import { Route } from 'react-router';
import {
  App,
  Admin,
  NotFound,
  Login,
  Register,
  ForgotPassword,
  UserList,
  UserEdit,
  UserCreate,
  ClientCreate,
  ClientEdit,
  ClientList,
} from './containers';

import { requireAuthentication } from './components/AuthenticatedComponent';

const routes = () =>
/**
   * Please keep routes in alphabetical order
   */
(
  <Route path="/" component={App}>
    <Route path="account">
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="forgotPassword" component={ForgotPassword} />
    </Route>
    <Route path="admin" component={(Admin)}>
      <Route path="users" component={requireAuthentication(UserList)}>
        <Route path="new" component={UserCreate} />
        <Route path=":id" component={UserEdit} />
      </Route>
      <Route path="clients" component={ClientList}>
        <Route path="new" component={ClientCreate} />
        <Route path=":id" component={ClientEdit} />
      </Route>
    </Route>
    {/* Catch all route */}
    <Route path="*" component={NotFound} status={404} />
  </Route>
);

export default routes;
