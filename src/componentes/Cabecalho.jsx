import { NavLink } from "react-router-dom";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>CATÁLOGO DE FILMES</h1>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/criar">Criar</NavLink>
        <NavLink to="/alterar">Alterar</NavLink>
        <NavLink to="/apagar">Apagar</NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
