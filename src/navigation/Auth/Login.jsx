import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector, connect } from 'react-redux';

import { useAuth } from './ProvideAuth';
import { LinkRoute } from 'components/LinkRoute';
import { ROOT } from 'navigation/CONSTANTS';
import { userActionCreator } from 'redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.LoginAction(inputs, this.props.history);
  }

  return (
    <>
      <Container className={classes.container} maxWidth='xs'>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Email'
                    name='email'
                    size='small'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Password'
                    name='password'
                    size='small'
                    type='password'
                    variant='outlined'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button color='secondary' fullWidth type='submit'>
                Log in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
