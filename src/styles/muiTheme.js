/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createMuiTheme } from '@material-ui/core';

const lightBackground = '#f6f6f4',
  lightBlue = '#8eadc0',
  blue = '#748fb1',
  purple = '#46394f',
  yellow = '#aa9830';

// Global styles can be moved to a separate file for ease of maintenance.
const global = {
  textRight: {
    textAlign: 'right',
  },
  typography: {
    button: {
      textTransform: 'none', //Using this will stop tranforming all button texts to UPPERCASE
    },
    fontFamily: ['alata'].join(','),
  },

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      label: {
        color: '#f1f1f1',
      },
    },
  },
};

export const light = () =>
  createMuiTheme({
    ...global,

    palette: {
      type: 'light',
      background: {
        default: lightBackground,
      },
      primary: {
        main: blue,
      },
      secondary: {
        main: lightBlue,
      },
    },
  });

export const dark = () =>
  createMuiTheme({
    ...global,

    palette: {
      type: 'dark',
      background: {
        default: '#303030',
      },
      primary: {
        main: '#040f3d',
      },
      secondary: {
        main: '#757575',
      },
    },
  });
