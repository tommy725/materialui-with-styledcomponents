import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './global.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import App from './app';
import theme from './config/theme';
import store from './config/store';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <CssBaseline />
            <App />
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

