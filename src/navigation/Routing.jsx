import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import { NotFound } from 'navigation/NotFound';
import { ROOT, SELECT_MEMBERSHIP } from 'navigation/CONSTANTS';
import { Page1 } from 'pages/Page1';
import Login from './Auth/Login';
import SelectMembership from 'pages/SelectMembership';
import PrivateRoute from './Auth/PrivateRoute';

export const Routing = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route path='/login'>
          <Login />
        </Route>

        {/* List all private/auth routes here */}
        <PrivateRoute path={SELECT_MEMBERSHIP}>
          <SelectMembership />
        </PrivateRoute>
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
