import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';

import App from './App';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }} autoHideDuration={1000} >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
)
