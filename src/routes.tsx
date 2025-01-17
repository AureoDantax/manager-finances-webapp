// src/routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Transactions from './pages/Transactions';
import SignUp from './components/SignUp';

import SignInSide from './components/SignInSide';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}
                children="/categories" />
            <Route path="/categories" element={<Categories />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<SignInSide />} />
        </Routes>
    );
};

export default AppRoutes;