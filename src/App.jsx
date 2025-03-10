import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";
import Ejercicio5 from "./pages/Ejercicio5";
import Ejercicio6 from "./pages/Ejercicio6";
import Ejercicio7 from "./pages/Ejercicio7";
import Ejercicio8 from "./pages/Ejercicio8";
import LaboratorioUno from "./pages/laboratorioUno";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="ejercicio1" element={<Ejercicio1 />} />
          <Route path="ejercicio2" element={<Ejercicio2 />} />
          <Route path="ejercicio3" element={<Ejercicio3 />} />
          <Route path="ejercicio4" element={<Ejercicio4 />} />
          <Route path="ejercicio5" element={<Ejercicio5 />} />
          <Route path="ejercicio6" element={<Ejercicio6 />} />
          <Route path="ejercicio7" element={<Ejercicio7 />} />
          <Route path="ejercicio8" element={<Ejercicio8 />} />
          <Route path="laboratorio-uno" element={<LaboratorioUno />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;