// src/components/Modal.tsx
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.palette.background.paper};
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    transition: background-color 0.3s;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5em;
  color: ${({ theme }) => theme.palette.text.primary};
  transition: color 0.3s;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
     color: ${({ theme }) => theme.palette.text.primary};
    transition: color 0.3s;
`;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    const theme = useTheme()
    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent theme={theme}>
                <ModalHeader>
                    <ModalTitle theme={theme}>
                        <Typography variant="h6" component="h2" sx={{ textAlign: 'right', marginBottom: '0px' }}>
                        {title}
                    </Typography></ModalTitle>
                    <CloseButton onClick={onClose} theme={theme}>×</CloseButton>
                </ModalHeader>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;