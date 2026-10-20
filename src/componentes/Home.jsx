import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://6ad7bdf395e98f36aef2c76d.mockapi.io/users";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setFilmes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container" style={{ maxWidth: 900 }}>
      {filmes.map((f) => (
        <Link
          key={f.id}
          to={`/read/${f.id}`}
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
