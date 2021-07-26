import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --dark: #15181d;
    --light: #EDF2F4;
    --primary: #bcbc2c;
    --darkGray: #2b2e35;
    --secondary: #D90429;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;    
    box-sizing: border-box;
  }

  body{
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    color: var(--light);
    transition: .2s ease-in-out;
    border: 1px solid var(--light);
    background-color: var(--darkGray);  

    :hover{
      background-color: var(--primary);
    }

    :active{
      transform: scale(0.95);
    }

    :disabled{
      color: var(--darkGray);
      background-color: transparent;
      border: 1px solid var(--darkGray);
    }
  }
`;
