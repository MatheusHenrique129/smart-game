import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --dark: #010a19;
    --light: #74dd78;
    --primary: #bcbc2c;
    --darkGray: #2b2e35;
    --secondary: #D90429;
    --lightGray: #f1f1f1;
    --textPrimary: #010a19;
    --buttonPrimary: #ff6900;
    --footerPrimary: #f1f1f1;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;    
    box-sizing: border-box;
    font-family: Roboto, sans-serif;  
  }

  body{
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: var(--dark)
  }

  ::-webkit-scrollbar{
    width: 10px;
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-track{
    background-color: var(--lightGray);
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 50px;
    background-color: var(--light);
  }

  button {
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    color: var(--textPrimary);
    transition: .2s ease-in-out;
    background-color: var(--light);  

    :hover{
      background-color: var(--buttonPrimary);
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
