// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './contexts/AppContext'; // Importe o AppProvider

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <AppProvider> {/* Envolve a aplicação com AppProvider */}
          <App />
      </AppProvider>
  </React.StrictMode>
);