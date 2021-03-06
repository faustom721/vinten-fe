import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Typography, TextField, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';

// For some reason we need this here
import { store } from 'redux/store';

import { CenteredWrapper } from 'components';
import { userActionCreator } from 'redux/actions/userActions';

function Login(props) {
  const history = useHistory();

  useEffect(() => {
    props.resetError();
  }, []);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((input) => ({ ...credentials, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.loginAction(credentials, history);
  }

  return (
    <CenteredWrapper>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant='h2'>Acceso</Typography>
            </Grid>
            <Grid item xs={12}>
              {props.user.error && (
                <Alert severity='error'>{props.user.error}</Alert>
              )}
            </Grid>
            <Grid item m={2} xs={12}>
              <TextField
                fullWidth
                label='Email o usuario'
                name='username'
                type='text'
                size='small'
                variant='outlined'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Contraseña'
                name='password'
                size='small'
                type='password'
                variant='outlined'
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                color='secondary'
                variant='contained'
                fullWidth
                type='submit'
              >
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </CenteredWrapper>
  );
}

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
