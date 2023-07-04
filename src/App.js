import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Profissionais from './pages/Profissionais';

function App() {
  return (
    <Router>
      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:id" element={<Servicos />} />
        <Route path="/servicos/:id/profissionais/:id2" element={<Profissionais />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/card" element={<Profissionais />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
