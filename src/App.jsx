import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Set moment language to spanish
import 'moment/locale/es';

import { jwtTokenAuthProvider } from 'ra-data-django-rest-framework';

import vintenDataProvider from './dataProvider';
import Dashboard from './Dashboard';
import MyLayout from './MyLayout';
import { lightTheme, darkTheme } from './muiTheme';

const authProvider = jwtTokenAuthProvider({
  obtainAuthTokenUrl: 'http://localhost:8000/token/',
});
const dataProvider = vintenDataProvider();

const App = () => {
  // set dark theme when dark mode is set
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <Admin
      layout={MyLayout}
      theme={isDarkModeEnabled ? darkTheme : lightTheme}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name='2/clients'
        options={{ label: 'Clientes' }}
        list={ListGuesser}
      />
    </Admin>
  );
};

export default App;
