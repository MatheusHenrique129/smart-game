import { createGlobalStyle } from "styled-components";
import fundo from "./assets/fundo.jpg";

export const GlobalStyles = createGlobalStyle`

:root{
    --dark: #15181d;
    --darkGray: #2b2e35;
    --light: #EDF2F4;
    --primary: #bcbc2c;
    --secondary: #D90429;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;    
    box-sizing: border-box;
  }

  body{
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: url(${fundo});
  }

  ::-webkit-scrollbar{
    width: 5px;
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-track{
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: var(--light);
  }

  button {
    padding: 10px;
    font-weight: bold;
    color: var(--light);
    background-color: var(--darkGray);
    border: 1px solid var(--light);
    border-radius: 4px;
    cursor: pointer;
    transition: .2s ease-in-out;

    :hover{
      background-color: var(--primary);
    }

    :active{
      transform: scale(0.95);
    }

    :disabled{
      background-color: transparent;
      border: 1px solid var(--darkGray);
      color: var(--darkGray);
    }
  }
`;
