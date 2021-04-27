import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Paper,
  Box,
  TextField,
  Grid,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// For some reason we need this here
import { store } from 'redux/store';

import { LinkRoute } from 'components/LinkRoute';
import { ROOT } from 'navigation/CONSTANTS';
import { userActionCreator } from 'redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '35px',
  },
}));

function Login(props) {
  const styles = useStyles();
  const history = useHistory();

  useEffect(() => {
    props.resetError();
  }, [props.user.error]);

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
      <Container maxWidth='xs'>
        <Paper className={styles.paper} elevation={2}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
        </Paper>
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
