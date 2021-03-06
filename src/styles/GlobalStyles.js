import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #002D75;
    --secondary: #FF5900;
    --font: #1f1f1f;
    --white: #ffffff;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    background: var(--white);
  }
  
  img {
    max-height: 100%;
    max-width: 100%;
  }
  
`;

export default GlobalStyles;
