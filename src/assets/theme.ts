// src/assets/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
         primary: {
          main: '#007bff',
         },
       background: {
          default: '#f5f5f5',
          paper: '#fff',
        },
       text: {
         primary: '#333'
        }
    },
    typography: {
      fontFamily: "'Roboto', sans-serif"
    }
});

export const darkTheme = createTheme({
    palette: {
       mode: 'dark',
        primary: {
           main: '#bb86fc',
        },
         background: {
             default: '#121212',
             paper: '#1e1e1e',
         },
        text: {
          primary: '#fff',
        }
    },
     typography: {
      fontFamily: "'Roboto', sans-serif"
    }
});