//import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [selecionado, setSelecionado] = useState(null); // null = mostra a lista

  useEffect(() => {
    axios
      .get("https://6ad7bdf395e98f36aef2c76d.mockapi.io/users")
      .then((res) => setFilmes(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (selecionado) {
    return (
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="border rounded bg-white p-4">
          <h3 className="mb-3">Detalhes do filme</h3>
          <p>
            <strong>Id:</strong> {selecionado.id}
          </p>
          <p>
            <strong>Nome:</strong> {selecionado.nome}
          </p>
          <p>
            <strong>Gênero:</strong> {selecionado.genero}
          </p>
          <p>
            <strong>Ano:</strong> {selecionado.ano}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => setSelecionado(null)}
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="container" style={{ maxWidth: 900 }}>
      {filmes.map((f) => (
        <div
          key={f.id}
          onClick={() => setSelecionado(f)}
          className="border rounded bg-white p-3 mb-3"
          style={{ cursor: "pointer" }}
        >
          <strong>Id:</strong> {f.id}
          <strong className="ms-5">Nome:</strong> {f.nome}
        </div>
      ))}
    </div>
  );
}

export default Home;
