import { login } from 'services';

// ***************** Action types *********************

export const actionTypes = {
  LOADING: 'LOADING_USER',
  AUTHENTICATED: 'AUTHENTICATED_USER',
  UNAUTHENTICATED: 'UNAUTHENTICATED_USER',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  RESET_ERROR: 'RESET_ERROR_USER',
};

// ***************** Actions **************************
const userActions = {
  // -- Authentication
  loading: (value) => ({
    type: actionTypes.LOADING,
  }),
  authenticated: () => ({
    type: actionTypes.AUTHENTICATED,
  }),
  authenticationError: () => ({
    type: actionTypes.AUTHENTICATION_ERROR,
    payload: 'Email o contraseña inválidos',
  }),

  resetError: () => ({
    type: actionTypes.RESET_ERROR,
  }),
};

// ***************** Action creator *********************

export const userActionCreator = (dispatch) => ({
  // -- Login
  loginAction: async ({ username, password }, history) => {
    dispatch(userActions.loading(true));
    try {
      const res = await login({ username, password });
      if (res.status !== 200) throw res;
      dispatch(userActions.authenticated());
      localStorage.setItem('token', res.data.token);
      history.push('/secret');
    } catch (error) {
      dispatch(userActions.authenticationError());
    }
    dispatch(userActions.loading(false));
  },
  // -- Reset error
  resetError: () => {
    dispatch(userActions.resetError());
  },
});
