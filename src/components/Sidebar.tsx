// src/components/Sidebar.tsx
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
    background-color: ${(props) => props.theme.palette.background.paper};
    width: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s;
    height: 100vh;
`;

const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const SidebarLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
    &:hover{
         background-color: ${({theme}) => theme.palette.action.hover};
    }
`;

const Sidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <SidebarContainer theme={theme}>
      <SidebarNav>
        <SidebarLink to="/dashboard" theme={theme}>Dashboard</SidebarLink>
        <SidebarLink to="/categories" theme={theme}>Categorias</SidebarLink>
        <SidebarLink to="/transactions" theme={theme}>Transações</SidebarLink>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;