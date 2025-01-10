// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import AppTheme from './AppTheme';
import GlobalStyle from './assets/globalStyles';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';


const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
`;

const AppContent = styled.div`
    padding: 20px;
    flex: 1;
`;

const App: React.FC = (props: { disableCustomTheme?: boolean}) => {
    return (
        <AppTheme {...props}>
            
            <Router>
                <GlobalStyle />
                <AppContainer>
                    <Sidebar />
                    <AppContent>
                        <AppRoutes />
                    </AppContent>
                </AppContainer>
            </Router>
        </AppTheme >

    );
};

export default App;