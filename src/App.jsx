import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Cabecalho from "./componentes/Cabecalho";
import Home from "./componentes/Home";
import Create from "./componentes/Create";
import Update from "./componentes/Update";
import Read from "./componentes/Read";
import Remove from "./componentes/Remove";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/remove" element={<Remove />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
