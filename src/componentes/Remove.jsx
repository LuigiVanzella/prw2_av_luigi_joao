import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://6ad7bdf395e98f36aef2c76d.mockapi.io/users";

function Remove() {
  const [id, setId] = useState("");
  const [filme, setFilme] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);
  const navigate = useNavigate();

  const handleProcurar = () => {
    if (id.trim() === "") return;
    setFilme(null);
    setNaoEncontrado(false);
    axios
      .get(`${API}/${id}`)
      .then((res) => setFilme(res.data))
      .catch(() => setNaoEncontrado(true));
  };

  const handleApagar = () => {
    axios
      .delete(`${API}/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" style={{ maxWidth: 900 }}>
      {/* Caixa de busca */}
      <div className="border rounded bg-white p-4 mb-3">
        <h3 className="text-center fw-bold mb-4">Busca e remoção de filme</h3>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Id:
          </label>
          <input
            type="text"
            id="id"
            className="form-control"
            placeholder="Digite o id do filme"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setFilme(null);
              setNaoEncontrado(false);
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={handleProcurar}>
          Procurar
        </button>
        <button className="btn btn-danger ms-3" onClick={() => navigate("/")}>
          Cancelar
        </button>

        {/* Id não existe */}
        {naoEncontrado && (
          <div className="mt-3">
            <div className="alert alert-danger">O id {id} não existe.</div>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              Voltar
            </button>
          </div>
        )}
      </div>

      {/* Dados do filme encontrado */}
      {filme && (
        <div className="border rounded bg-white p-4">
          <h3 className="mb-3">Detalhes do filme</h3>
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
          <button className="btn btn-danger" onClick={handleApagar}>
            Apagar
          </button>
          <button
            className="btn btn-outline-danger ms-3"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default Remove;
