import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
    children: ReactNode;
}

interface AppContextValues {
    theme: string;
    setTheme: (theme: string) => void;
}

const AppContext = createContext<AppContextValues>({
    theme: 'light',
    setTheme: () => {},
});


const AppProvider: React.FC<AppContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
        {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };