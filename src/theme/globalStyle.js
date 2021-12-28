import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 1.6rem;
    color: #CCC;

    height: 100vh;
    width: 100vw;
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  }

  body > div {
    padding: 5rem 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  main {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
