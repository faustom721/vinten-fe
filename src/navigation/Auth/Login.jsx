import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector, connect } from 'react-redux';

// For some reason we need this here
import { store } from 'redux/store';

import { LinkRoute } from 'components/LinkRoute';
import { ROOT } from 'navigation/CONSTANTS';
import { userActionCreator } from 'redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    border: 'solid 1px',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: '100vh',
  },
}));

function Login(props) {
  const classes = useStyles();
  const history = useHistory();

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
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='80vh'
    >
      <Container className={classes.loginWrapper} maxWidth='xs'>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid container justify='center'>
                  <Box mb={3}>
                    <Typography variant='h2'>Acceso</Typography>
                  </Box>
                </Grid>
                <Grid item m={2} xs={12}>
                  <TextField
                    fullWidth
                    label='Email'
                    name='email'
                    size='small'
                    variant='outlined'
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
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
        </form>
      </Container>
    </Box>
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
