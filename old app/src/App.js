import React, { useState } from 'react';
// Handle console logs
import 'utils/dropConsole';
// Fonts
import '@fontsource/alata';
// ROUTER
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'navigation/Routing';
// MUI Theme
import { ThemeProvider, Button, createMuiTheme } from '@material-ui/core';
import { ThemeSwitch } from 'components/ThemeSwitch';
import { dark, light } from 'styles/muiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
// import { ProvideAuth } from 'navigation/Auth/ProvideAuth';
// Redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log('theme=', darkState ? 'dark' : 'light');
  };

  return (
    <>
      <div>
        <Provider store={store}>
          <ThemeProvider theme={darkState ? dark() : light()}>
            <CssBaseline />
            <ThemeSwitch
              darkState={darkState}
              handleThemeChange={handleThemeChange}
            />
            <BrowserRouter>
              <Routing />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </div>
    </>
  );
}

// To monitor the app built environment
window.showEnv = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  };
};

export default App;
