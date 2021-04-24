import jwt_decode from 'jwt-decode';

import { login } from 'services';

// ***************** Action types *********************

export const actionTypes = {
  AUTHENTICATED: 'AUTHENTICATED_USER',
  UNAUTHENTICATED: 'UNAUTHENTICATED_USER',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
};

// ***************** Actions **************************
const userActions = {
  loading: (value) => ({
    type: actionTypes.LOADING,
    payload: value,
  }),
};

// ***************** Action creator *********************

export const userActionCreator = (dispatch) => ({
  // Login *****
  LoginAction: async ({ email, password }, history) => {
    dispatch(userActions.loading(true));
    try {
      await console.log('sdfsdfsdfsdfsdfsdfsd');
      // const res = await axios.post(`${URL}/signin`, { email, password });
      dispatch({ type: actionTypes.AUTHENTICATED });
      // localStorage.setItem('user', res.data.token);
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
