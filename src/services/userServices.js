import axiosInstance from 'services/config/axiosConfig';

export const login = ({ username, password }) => {
  const url = 'token/';
  const response = axiosInstance({
    method: 'POST',
    url,
    data: { username, password },
  });

  return response;
};
