import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '@components/App';
import Login from '@components/auth/Login';
import Signup from '@components/auth/Signup';

const RouterInstance = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterInstance;
