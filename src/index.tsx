import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

const isVercel =
  window.location.hostname.includes('vercel.app') ||
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const basename = isVercel ? '/' : (import.meta.env.BASE_URL || '/');

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);