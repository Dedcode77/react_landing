import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Services from './components/Services';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Services />
  </React.StrictMode>
);

