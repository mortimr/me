import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme, Theme } from './theme';

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: transparent;
}

  html {
    background-color: ${props => (props.theme as Theme).backgroundColor};
    font-family: 'Heebo', sans-serif;
  }

  div {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }

  h1 {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }

  h2 {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }

  h3 {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }

  h4 {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }

  p {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }

  span {
    color: ${props => (props.theme as Theme).textColor};
    font-weight: 200;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
