// src/assets/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
        color: #333;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
    }

    button {
        font-family: inherit;
    }
    
   input, select{
        font-family: inherit;
   }
`;

export default GlobalStyle;