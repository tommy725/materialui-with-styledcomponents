import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    dialog: {
      background: '#313631',
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
