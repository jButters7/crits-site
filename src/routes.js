import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Complete from './Components/Complete';

export default (
  <Switch>

    <Route exact path='/' component={Auth} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/complete' component={Complete} />

  </Switch>
)