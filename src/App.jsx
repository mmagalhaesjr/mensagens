
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Exibir from './Pages/Exibir/Exibir';
import Controle from './Pages/Controle/Controle';


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Exibir />} />
        <Route path="/controle" element={<Controle />} />
      </Routes>
    </Router>
  )
}
