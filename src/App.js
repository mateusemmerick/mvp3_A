import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicos from './pages/Servicos';
import MainServicos from './pages/MainServicos';
import Sobre from './pages/Sobre';
import Profissionais from './pages/Profissionais';
import Cadastrar from './pages/Cadastrar';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<MainServicos />} />
            <Route path="/servicos/:id" element={<Servicos />} />
            <Route path="/servicos/:id/profissionais/:id2" element={<Profissionais />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/card" element={<Profissionais />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
    </ThemeProvider>
  );
}

export default App;
