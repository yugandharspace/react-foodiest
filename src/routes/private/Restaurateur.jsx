import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as USER_TYPES from '../../constants/userTypes';

const Restaurateur = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user && user.isVerified && user.type === USER_TYPES.RESTAURATEUR ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(Restaurateur);
