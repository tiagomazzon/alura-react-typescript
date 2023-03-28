import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioRestaurante = () => {

  const parametros = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState('');

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    axios.post('http://localhost:8000/api/v2/restaurantes/', {
      nome: nomeRestaurante
    })
      .then(() => {
        alert("Restaurante cadastrado com sucesso!");
      });
  };

  useEffect(() => {
    if (parametros.id) {
      axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
        .then(resposta => setNomeRestaurante(resposta.data.nome));
    }
  }, [parametros]);

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        label="Nome do Restaurante"
        variant="standard"
        value={nomeRestaurante}
        onChange={evento => setNomeRestaurante(evento.target.value)}
      />
      <Button type="submit" variant="outlined">Salvar</Button>
    </form>
  );
}

export default FormularioRestaurante;