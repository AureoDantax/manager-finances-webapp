// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
    background-color: #f0f0f0;
    width: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(Link)`
    text-decoration: none;
    color: #333;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    &:hover{
        background-color: #e0e0e0;
    }
`;

const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
          <SidebarNav>
            <SidebarLink to="/">Dashboard</SidebarLink>
            <SidebarLink to="/categories">Categorias</SidebarLink>
            <SidebarLink to="/transactions">Transações</SidebarLink>
          </SidebarNav>
        </SidebarContainer>
    );
};

export default Sidebar;