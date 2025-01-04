// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import styled from 'styled-components';
import GlobalStyle from './assets/globalStyles';
import Sidebar from './components/Sidebar';

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
`;

const AppContent = styled.div`
    padding: 20px;
    flex: 1;
`;

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle/>
            <AppContainer>
                <Sidebar />
                <AppContent>
                    <AppRoutes />
                </AppContent>
            </AppContainer>
        </Router>
    );
};

export default App;