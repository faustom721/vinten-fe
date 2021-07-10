import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const commonStyles = {
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  props: {
    MuiCard: {
      variant: 'outlined',
    },
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
};

const lightTheme = createMuiTheme({
  ...commonStyles,

  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const darkTheme = createMuiTheme({
  ...commonStyles,

  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

export { lightTheme, darkTheme };
