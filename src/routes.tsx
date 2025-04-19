// src/routes.tsx
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Transactions from './pages/Transactions';
import Sidebar from './components/Sidebar';
import SignInSide from './pages/SignInSide';
const MainContent: React.FC = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === '/LOGIN' || location.pathname === '/login' || location.pathname === '/sign-up' || location.pathname === '/';

  return (
    <div style={{ display: 'flex' }}>
      {!hideSidebar && <Sidebar />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;