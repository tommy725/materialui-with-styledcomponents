import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import "../assets/fonts/grifterbold.otf";


const theme = createTheme({
  palette: {
    primary: {
      main: '#101310',
      light: '#101310',
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
  size: {
    button: {
      height: '3.75rem'
    }
  },
  typography: {
    fontFamily: ['GRIFTER', 'sans-serif'].join(','),
    // fontFamily: 'grifterbold';
    fontSize: "1rem",
    letterSpacing: "0.0625rem"
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '0.3125rem',
        borderRadius: 100,
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
