import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --dark: #282a36;
    --darkGray: #44475a;
    --light: #EDF2F4;
    --primary: #EF233C;
    --secondary: #D90429;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;    
    box-sizing: border-box;

  }
`;
