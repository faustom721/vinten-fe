import { actionTypes } from 'redux/actions/userActions';

const initialState = {
  loading: false,
  authenticated: false,
  error: null,

  firstName: null,
  lastName: null,
  username: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: true };
    case actionTypes.AUTHENTICATED:
      return { ...state, authenticated: true };
    case actionTypes.UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case actionTypes.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.RESET_ERROR:
      return { ...state, error: initialState.error };
    case actionTypes.FILL_DATA:
      const userData = action.payload;
      return {
        ...state,
        firstName: userData.first_name,
        lastName: userData.last_name,
        username: userData.username,
      };

    default:
      return state;
  }
};
