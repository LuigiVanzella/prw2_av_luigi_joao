import { NavLink } from "react-router-dom";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>CATÁLOGO DE FILMES</h1>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/create">Criar</NavLink>
        <NavLink to="/update">Alterar</NavLink>
        <NavLink to="/remove">Apagar</NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
