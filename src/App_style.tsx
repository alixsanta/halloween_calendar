import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle      // Style global de la page d'accueil
`
  body {
    background: center / cover url("./img/moon.jpg");
    margin: 0;
    height: 100vh;
  }
`;

export const StyledApp = styled.div     // Style global des trappes
`
  display: grid;
  grid-gap: 120px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px;
`;
