import axiosInstance from 'services/config/axiosConfig';

export const getCompany = (id) => {
  const url = `compoanies/${id}/`;
  const response = axiosInstance({
    method: 'GET',
    url,
    needToken: true,
  });

  return response;
};
