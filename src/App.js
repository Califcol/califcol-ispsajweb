import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ConceptosGenerales from "./components/Conceptos/ConceptosGenerales";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Concepto from "./components/Conceptos/Concepto";
import Becas from "./components/Becas/Becas";
import Beca from "./components/Becas/Beca";
import LiquidacionIndividual from "./components/Liquidacion_Individual/LiquidacionIndividual";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/conceptosgenerales" element={<ConceptosGenerales />} />
          <Route path="/conceptosgenerales/:id" element={<Concepto />} />
          <Route path="/becas" element={<Becas />} />
          <Route path="/becas/:id" element={<Beca />} />
          <Route path="/liquidacionindividual" element={<LiquidacionIndividual />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
