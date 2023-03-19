import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import "../assets/fonts/grifterbold.otf";


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
  size: {
    button: {
      height: '6rem'
    }
  },
  typography: {
    fontFamily: ['GRIFTER', 'sans-serif'].join(','),
    // fontFamily: 'grifterbold';
    fontSize: "1.6rem",
    letterSpacing: "0.1rem"
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '0.5rem',
        borderRadius: 100,
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
