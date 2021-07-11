import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import drfProvider, {
  jwtTokenAuthProvider,
  fetchJsonWithAuthJWTToken,
} from 'ra-data-django-rest-framework';

import Dashboard from './screens/Dashboard';
import { lightTheme, darkTheme } from './muiTheme';

const authProvider = jwtTokenAuthProvider({
  obtainAuthTokenUrl: 'http://localhost:8000/token/',
});
const dataProvider = drfProvider(
  'http://localhost:8000',
  fetchJsonWithAuthJWTToken
);

const App = () => {
  // set dark theme when dark mode is set
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <Admin
      theme={isDarkModeEnabled ? darkTheme : lightTheme}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name='clients' list={ListGuesser} />
    </Admin>
  );
};

export default App;
