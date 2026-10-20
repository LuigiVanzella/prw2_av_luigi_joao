import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "https://6ad7bdf395e98f36aef2c76d.mockapi.io/users";

function Read() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => setFilme(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container" style={{ maxWidth: 900 }}>
      <div className="border rounded bg-white p-4">
        <h3 className="mb-3">Detalhes do filme</h3>
        {filme && (
          <>
            <p>
              <strong>Id:</strong> {filme.id}
            </p>
            <p>
              <strong>Nome:</strong> {filme.nome}
            </p>
            <p>
              <strong>Gênero:</strong> {filme.genero}
            </p>
            <p>
              <strong>Ano:</strong> {filme.ano}
            </p>
          </>
        )}
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Read;
