// src/index.tsx
import  { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
      <AppProvider> 
          <App />
      </AppProvider>
  </StrictMode>
);