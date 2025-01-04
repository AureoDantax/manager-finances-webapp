// src/components/Notification.tsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

 const slideOut = keyframes`
  from {
     transform: translateY(0);
     opacity: 1;
   }
   to {
    transform: translateY(-100%);
     opacity: 0;
   }
 `;


const NotificationContainer = styled.div<{isVisible: boolean, type?: 'success' | 'error'}>`
     position: fixed;
    top: 20px;
   left: 50%;
    transform: translateX(-50%);
    background-color: ${({ type }) => (type === 'error' ? '#f44336' : '#4caf50')};
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    z-index: 1100;
    opacity: ${({isVisible}) => isVisible ? '1' : '0'};
    animation: ${({isVisible}) => isVisible ? slideIn : slideOut} 0.3s ease-in-out forwards;
   pointer-events: none;
`;

 interface NotificationProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
      type?: 'success' | 'error';
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible, onClose, type }) => {
    const [visible, setVisible] = useState(isVisible);

      useEffect(() => {
        if (isVisible) {
         setVisible(true);
          const timeout = setTimeout(() => {
            setVisible(false);
            onClose();
          }, 3000);
            return () => clearTimeout(timeout);
        } else {
         setVisible(false);
       }

        }, [isVisible, onClose])

    return (
      <NotificationContainer isVisible={visible} type={type}>
          {message}
     </NotificationContainer>
    );
};

export default Notification;