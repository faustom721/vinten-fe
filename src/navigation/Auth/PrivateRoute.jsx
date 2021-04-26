// A wrapper for <Route> that redirects to the login

import React, { createContext, useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useAuth } from './ProvideAuth';

// screen if you're not yet authenticated.
function PrivateRoute({ children, user, ...rest }) {
  // let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.authenticated ? (
          <>
            {children}
            <br />
            <div>This is a protected route</div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = ({ persist }) => {
  return {
    session: persist,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
