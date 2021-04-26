import { actionTypes } from 'redux/actions/userActions';

const initialState = {
  loading: false,
  authenticated: false,
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

    default:
      return state;
  }
};
