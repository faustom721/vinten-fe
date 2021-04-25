import axiosInstance from 'services/config/axiosConfig';

export const login = (credentials) => {
  const url = 'token/';
  const response = axiosInstance({
    method: 'POST',
    url,
    data: credentials,
  });

  return response;
};
