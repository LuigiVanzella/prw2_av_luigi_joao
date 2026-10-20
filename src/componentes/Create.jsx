import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://6ad7bdf395e98f36aef2c76d.mockapi.io/users";

function Create() {
  const [values, setValues] = useState({
    nome: "",
    genero: "",
    ano: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(API, values)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" style={{ maxWidth: 900 }}>
      <div className="border rounded bg-white p-4">
        <h3 className="mb-3">Criar filme</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite o nome"
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
              placeholder="Digite o gênero"
              value={values.genero}
              onChange={(e) => setValues({ ...values, genero: e.target.value })}
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
              placeholder="Digite o ano"
              value={values.ano}
              onChange={(e) => setValues({ ...values, ano: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Criar
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
    </div>
  );
}

export default Create;
