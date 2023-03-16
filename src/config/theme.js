import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0079C1',
      light: '#6EB1D9',
      dark: '#3A4647',
    },
    secondary: {
      main: '#6B7374',
      light: '#B2B2B2',
    },
    tertiary: {
      yellow: '#F2B844',
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '5px',
        borderRadius: 100,
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
