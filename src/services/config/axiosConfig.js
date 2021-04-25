import axios from 'axios';
import { store } from 'redux/store';
// import { refreshAccessToken } from '../global/redux/session/actions';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const headerType = config.contentType
    ? 'multipart/form-data'
    : 'application/json';

  if (config.needToken) {
    // const token = selectJwt(store.getState());
    const token = '';
    config.headers = {
      'Content-Type': headerType,
      Authorization: `Bearer ${token}`,
    };
  } else {
    config.headers = {
      'Content-Type': headerType,
    };
  }

  if (config.forPayment) {
    config.timeout = 300000;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      error.response.status === 401 &&
      error.response.data &&
      error.response.data.errors[0].code === 'token_not_valid' &&
      error.response.data.errors[0].code ===
        'Given token not valid for any token type'
    ) {
      //TODO
      // store.dispatch(refreshAccessToken());
      const originalRequest = error.config;
      return axiosInstance(originalRequest);
    }
    throw error;
  }
);

export default axiosInstance;
