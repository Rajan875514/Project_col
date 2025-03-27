
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import StoreContextProvider from './components/context/StoreContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </BrowserRouter>
);
