// src/contexts/AppContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
 import { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../assets/theme'

interface AppContextProps {
    children: ReactNode;
}

interface AppContextValues {
  theme: Theme;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextValues>({
    theme: lightTheme,
    toggleTheme: () => {}
});


const AppProvider: React.FC<AppContextProps> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

   const toggleTheme = () => {
         setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
      }

    return (
        <AppContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider };