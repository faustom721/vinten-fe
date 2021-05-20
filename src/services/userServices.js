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

export const getMemberships = () => {
  const url = 'memberships/';
  const response = axiosInstance({
    method: 'GET',
    url,
    needToken: true,
  });

  return response;
};

export const getUserData = () => {
  const url = 'me/';
  const response = axiosInstance({
    method: 'GET',
    url,
    needToken: true,
  });

  return response;
};
