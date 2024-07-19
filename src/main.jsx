import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-9dg52k6z4gq0.frontegg.com',
  clientId: '4897b95a-1f16-4b22-9921-5ee4f804715f'
};
ReactDOM.createRoot(document.getElementById('root')).render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>

)
