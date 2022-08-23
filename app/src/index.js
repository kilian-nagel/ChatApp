import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Component , useState } from 'react';
import {Auth0Provider} from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="root">
    <Auth0Provider
      domain="dev-lq9tczk6.us.auth0.com"
      clientId="Amdq3nWqxj2W5KaXUICkB5rrL9AToGkW"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  </div>
);
