// src/routes.tsx
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Transactions from './pages/Transactions';
import SignUp from './components/SignUp';

import SignInSide from './components/SignInSide';
import Sidebar from './components/Sidebar';

const MainContent: React.FC = () => {
    const location = useLocation();
    const hideSidebar = location.pathname === '/LOGIN' ||location.pathname === '/login' || location.pathname === '/sign-up';
  
    return (
      <div style={{ display: 'flex' }}>
        {!hideSidebar && <Sidebar />}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<SignInSide />} />
          </Routes>
        </div>
      </div>
    );
  };

export default MainContent;