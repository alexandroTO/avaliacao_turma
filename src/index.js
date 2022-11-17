import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from './pages/home';
import Linguagem1 from './pages/linguagem1';
import Linguagem2 from './pages/linguagem2';
import ProjetoWeb from './pages/projetoWeb';
import ProgramacaoWeb from './pages/programacaoWeb';
import Login from './pages/login';
import Relatorios from './pages/relatorios'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/linguagem-tn1" element={<Linguagem1/>} />
        <Route path="/linguagem-tn2" element={<Linguagem2/>} />
        <Route path="/projeto-web" element={<ProjetoWeb/>} />
        <Route path="/programacao-web" element={<ProgramacaoWeb/>} />
        <Route path="/admin/" element={<Login/>} />
        <Route path="/admin/relatorios" element={<Relatorios/>} />
      </Routes>
    </BrowserRouter>
  
);
