import React from 'react';
import ReactDOM from 'react-dom/client';
import Footers from './components/footers';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Footers />
  </React.StrictMode>
);

