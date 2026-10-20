//import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios
      .get("https://6ad7bdf395e98f36aef2c76d.mockapi.io/users")
      .then((res) => setFilmes(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container" style={{ maxWidth: 900 }}>
      {filmes.map((f) => (
        <Link
          key={f.id}
          to={`/ler/${f.id}`}
          className="d-block border rounded bg-white p-3 mb-3 text-decoration-none text-dark"
        >
          <strong>Id:</strong> {f.id}
          <strong className="ms-5">Nome:</strong> {f.nome}
        </Link>
      ))}
    </div>
  );
}

export default Home;
