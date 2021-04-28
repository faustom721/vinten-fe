import { login, getMemberships } from 'services';
import { SELECT_MEMBERSHIP } from 'navigation/CONSTANTS';

// ***************** Action types *********************

export const actionTypes = {
  LOADING: 'LOADING_USER',
  AUTHENTICATED: 'AUTHENTICATED_USER',
  UNAUTHENTICATED: 'UNAUTHENTICATED_USER',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  NO_COMPANY_ERROR: 'NO_COMPANY_ERROR', //the user logged in hasn't got any active company in the system
  RESET_ERROR: 'RESET_ERROR_USER',
  RESET_COMPANY: 'RESET_COMPANY',
  FILL_DATA: 'FILL_DATA_USER',
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

  resetCompany: () => ({
    type: actionTypes.RESET_COMPANY,
  }),
  fillUserData: (userData) => ({
    type: actionTypes.FILL_DATA,
    payload: userData,
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
      localStorage.setItem('token', res.data.access);
      history.push(SELECT_MEMBERSHIP);
    } catch (error) {
      console.log(error);
      dispatch(userActions.authenticationError());
    }
    dispatch(userActions.loading(false));
  },
  // -- Reset error
  resetError: () => {
    dispatch(userActions.resetError());
  },
  // -- Get user's memberhips in companies
  getMemberships: async () => {
    dispatch(userActions.loading(true));
    try {
      const res = await getMemberships();
      if (res.status !== 200) throw res;
      dispatch(userActions.resetCompany());
      if (res.data.length > 0) {
        console.log(res.data[0].user);
        dispatch(userActions.fillUserData(res.data[0].user)); // use the user's data in the first membership object
      } else {
        dispatch(userActions.NO_COMPANY_ERROR);
      }
    } catch (error) {
      dispatch(userActions.authenticationError());
    }
    dispatch(userActions.loading(false));
  },
});
