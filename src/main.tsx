import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import AppLayout from './components/AppLayout';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Fatal: Failed to identify a valid HTML root container element inside index.html',
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
);
