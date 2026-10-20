import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://6ad7bdf395e98f36aef2c76d.mockapi.io/users";

function Update() {
  const [id, setId] = useState("");
  const [values, setValues] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);
  const navigate = useNavigate();

  const handleProcurar = () => {
    if (id.trim() === "") return;
    setValues(null);
    setNaoEncontrado(false);
    axios
      .get(`${API}/${id}`)
      .then((res) => setValues(res.data))
      .catch(() => setNaoEncontrado(true));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/${id}`, values)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" style={{ maxWidth: 900 }}>
      {/* Caixa de busca */}
      <div className="border rounded bg-white p-4 mb-3">
        <h3 className="text-center fw-bold mb-4">Busca e edição de filme</h3>
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
              setValues(null);
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

      {/* Formulário com os dados encontrados */}
      {values && (
        <div className="border rounded bg-white p-4">
          <h3 className="mb-3">Editar filme</h3>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                className="form-control"
                value={values.nome}
                onChange={(e) => setValues({ ...values, nome: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genero" className="form-label">
                Gênero:
              </label>
              <input
                type="text"
                id="genero"
                className="form-control"
                value={values.genero}
                onChange={(e) =>
                  setValues({ ...values, genero: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ano" className="form-label">
                Ano:
              </label>
              <input
                type="text"
                id="ano"
                className="form-control"
                value={values.ano}
                onChange={(e) => setValues({ ...values, ano: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Alterar
            </button>
            <button
              type="button"
              className="btn btn-danger ms-3"
              onClick={() => navigate("/")}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
