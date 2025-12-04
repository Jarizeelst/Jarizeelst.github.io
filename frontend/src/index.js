import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Portfolio from '../portfolio';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('src'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
reportWebVitals();
