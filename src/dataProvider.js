import drfProvider, {
  fetchJsonWithAuthJWTToken,
} from 'ra-data-django-rest-framework';
import { stringify } from 'query-string';
// import { fetchUtils } from 'ra-core'; // this is for using fetchUtils.fetchJson to fetch data without a token

// Vinten's data provider, which is based on the ra-data-django-rest-framework data provider
export default () => {
  const apiUrl = 'http://localhost:8000';
  return {
    ...drfProvider(apiUrl, fetchJsonWithAuthJWTToken), //django rest data provider

    // Just a GET request
    simpleGet: async (resource, params) => {
      const url = `${apiUrl}/${resource}/?${stringify(params)}`;
      const response = await fetchJsonWithAuthJWTToken(url);

      return {
        data: response.json,
        total: response.length,
      };
    },
  };
};
