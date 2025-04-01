
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Exibir from './Pages/Exibir/Exibir';
import Inseir from './Pages/Inseir/Inseir';


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Exibir />} />
        <Route path="/inserir" element={<Inseir />} />
      </Routes>
    </Router>
  )
}
