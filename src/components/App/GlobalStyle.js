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

    @media (min-width: 1800px) {
      font-size: 67.5%;
    }

    @media (max-width: 1400px) {
      font-size: 60%;
    }

    @media (max-width: 1000px) {
      font-size: 57.5%;
    }

    @media (max-width: 900px) {
      font-size: 52.5%;
    }

    @media (max-width: 800px) {
      font-size: 50%;
    }

    @media (max-width: 750px) {
      font-size: 47.5%;
    }

    @media (max-width: 700px) {
      font-size: 45%;
    }

    @media (max-width: 600px) {
      font-size: 42.5%;
    }

    @media (max-width: 500px) {
      font-size: 40%;
    }

    @media (max-width: 359px) {
      font-size: 36%;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
