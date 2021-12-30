import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
