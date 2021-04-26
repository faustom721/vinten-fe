import { login } from 'services';

// ***************** Action types *********************

export const actionTypes = {
  LOADING: 'LOADING_USER',
  AUTHENTICATED: 'AUTHENTICATED_USER',
  UNAUTHENTICATED: 'UNAUTHENTICATED_USER',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
};

// ***************** Actions **************************
const userActions = {
  loading: (value) => ({
    type: actionTypes.LOADING,
  }),
  authenticated: () => ({
    type: actionTypes.AUTHENTICATED,
  }),
};

// ***************** Action creator *********************

export const userActionCreator = (dispatch) => ({
  // Login *****
  loginAction: async ({ email, password }, history) => {
    dispatch(userActions.loading(true));
    try {
      const res = login({ email, password });
      dispatch(userActions.authenticated());
      localStorage.setItem('user', res.data.token);
      history.push('/secret');
    } catch (error) {
      dispatch({
        type: actionTypes.AUTHENTICATION_ERROR,
        payload: 'Invalid email or password',
      });
    }
    dispatch(userActions.loading(false));
  },
});
