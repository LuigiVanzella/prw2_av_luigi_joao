//import React from 'react'
import axios from "axios";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    axios
      .get("https://6ad7bdf395e98f36aef2c76d.mockapi.io/users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="d-flex flex-column justify-content-center
align-items-center bg-light vh-100"
    >
      <h1>Lista de Usuários</h1>
      <div className="w-75 rounded bg-white border shadow p-4"></div>
    </div>
  );
}

export default Home;
