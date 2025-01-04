// src/components/Button.tsx
import React, { useContext } from 'react';
import styles from './Button.module.css';
import { AppContext } from '../contexts/AppContext';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', disabled = false}) => {
    const { theme } = useContext(AppContext);

    return (
        <button
            className={`${styles.buttonDefault} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children} - {theme}
        </button>
    );
};

export default Button;