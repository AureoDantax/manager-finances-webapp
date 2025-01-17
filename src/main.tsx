import { Analytics } from "@vercel/analytics/react"
import { StrictMode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <SpeedInsights />
    <Analytics />
    <App />

  </StrictMode>
);