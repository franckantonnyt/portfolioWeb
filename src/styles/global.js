import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  box-sizing: border-box;
}
body, html {
  background: #fff;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Rubik', sans-serif;
}`;
