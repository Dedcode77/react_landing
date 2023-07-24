import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cover from './components/Cover';
>>>>>>> 994492f3b7990cd0587f103a84224e6a8e82ace1
=======
import './footers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

>>>>>>> 031c7147cb1546d7605378ade79e40c962f4ef9a

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Cover/>}  />
        <Route path = "*" element = {<Cover/>}  />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
