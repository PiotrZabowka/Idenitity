import React from 'react'
import { Route } from 'react-router'

// Import all of our components
import App from './App'
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'

export default (<Route path="/" component={App} >
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/widgets" component={Widgets} />
      </Route>);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
