// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';
import { Switch, FormControlLabel, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SidebarContainer = styled.aside`
    background-color: ${(props) => props.theme.palette.background.paper};
    width: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s;
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
  const { toggleTheme } = useAppContext();
  const theme = useTheme();

  return (
    <SidebarContainer theme={theme}>
      <SidebarNav>
        <SidebarLink to="/" theme={theme}>Dashboard</SidebarLink>
        <SidebarLink to="/categories" theme={theme}>Categorias</SidebarLink>
        <SidebarLink to="/transactions" theme={theme}>Transações</SidebarLink>
      </SidebarNav>
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Switch color="primary" onChange={toggleTheme} checked={theme.palette.mode === 'dark'} />}
          label="Modo Escuro"
        />
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;