// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const AppNav = styled.nav`
    background-color: #f0f0f0;
    padding: 10px;
`;

const AppNavUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
`;

const AppContent = styled.div`
    padding: 20px;
    flex: 1;
`;

const App: React.FC = () => {
    return (
        <Router>
            <AppContainer>
                <AppNav>
                    <AppNavUl>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categorias</Link>
                        </li>
                        <li>
                            <Link to="/transactions">Transações</Link>
                        </li>
                    </AppNavUl>
                </AppNav>
                <AppContent>
                    <AppRoutes />
                </AppContent>
            </AppContainer>
        </Router>
    );
};

export default App;