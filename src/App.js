import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import jsonServerProvider from 'ra-data-json-server';

import authProvider from './authProvider';
import Dashboard from './screens/Dashboard';
import { lightTheme, darkTheme } from './muiTheme';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <Admin
      theme={isDarkModeEnabled ? darkTheme : lightTheme}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name='users' list={ListGuesser} />
    </Admin>
  );
};

export default App;
