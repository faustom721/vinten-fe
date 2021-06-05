import React from 'react';
import PropTypes from 'prop-types';
import { LanguageSelection } from './components/LanguageSelection';
import { Typography, Button } from '@material-ui/core';
import { ROOT } from 'navigation/CONSTANTS';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActionCreator } from 'redux/actions/userActions';

const HomeView = (props) => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(path || ROOT);
  };
  return (
    <div>
      <Typography variant='h2'>HomeView {props.title}</Typography>
      <LanguageSelection />
      <Button variant='contained' color='primary'>
        Dashboard
      </Button>
    </div>
  );
};

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...userActionCreator(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
