import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';

export default (
  <Switch>

    <Route exact path='/' component={Auth} />
    <Route exact path='/dashboard' component={Dashboard} />

  </Switch>
)