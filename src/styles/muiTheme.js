/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createMuiTheme } from '@material-ui/core';
import { fontWeight } from '@material-ui/system';

// Global styles can be moved to a separate file for ease of maintenance.
const global = {
  textRight: {
    textAlign: 'right',
  },
  typography: {
    button: {
      textTransform: 'none', //Using this will stop tranforming all button texts to UPPERCASE
    },
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
        default: '#fbfaf8',
      },
      primary: {
        main: '#fbb728',
      },
      secondary: {
        main: '#040f3d',
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
