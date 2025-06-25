import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@xalesin/config';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TamaguiProvider>
  </React.StrictMode>
);