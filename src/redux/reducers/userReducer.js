import { actionTypes } from 'redux/actions/userActions';

const initialState = {
  authenticated: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATED:
      return { ...state, authenticated: true };
    case actionTypes.UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case actionTypes.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
