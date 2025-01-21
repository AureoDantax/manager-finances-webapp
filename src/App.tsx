// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import AppTheme from './AppTheme';
import GlobalStyle from './assets/globalStyles';
import MainContent from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';


const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
`;

const AppContent = styled.div`
    padding: 20px;
    flex: 1;
`;

const App: React.FC = (props: { disableCustomTheme?: boolean }) => {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
            <AppTheme {...props}>
                <Router>
                    <GlobalStyle />
                    <AppContainer>
                        <AppContent>
                            <MainContent />
                        </AppContent>
                    </AppContainer>
                </Router>
            </AppTheme >
        </GoogleOAuthProvider>

    );
};

export default App;