/**
 * @fileoverview Main entry point for the Xalesin ERP web application
 * @author Xalesin Team
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TamaguiProvider } from '@tamagui/core';
import { UIProvider } from '@xalesin/ui';
import { tamaguiConfig } from '@xalesin/ui/theme';
import App from './App';
import './index.css';

// Create root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
      <UIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UIProvider>
    </TamaguiProvider>
  </React.StrictMode>
);