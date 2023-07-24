import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cover from './components/Cover';

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
