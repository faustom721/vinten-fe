import React from 'react';
import HomeView from './HomeView';
import { Link } from 'react-router-dom';
import { SELECT_MEMBERSHIP, PAGE1 } from 'navigation/CONSTANTS';
import { LinkRoute } from 'components/LinkRoute';
import { NavLinks } from './components/NavLinks';

import { connect } from 'react-redux';
import { userActionCreator } from 'redux/actions/userActions';
// For some reason we need this here
import { store } from 'redux/store';

function HomeContainer() {
  return (
    <div>
      <NavLinks />
      <HomeView title='Home' />
    </div>
  );
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...userActionCreator(dispatch),
  };
}

export const connectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
