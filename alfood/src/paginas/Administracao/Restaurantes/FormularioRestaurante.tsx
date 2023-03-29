import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioRestaurante = () => {

  const parametros = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState('');

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (parametros.id) {
      http.put(`restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante
      })
        .then(() => {
          alert("Restaurante atualizado com sucesso!");
        });
    }
    else {
      http.post('restaurantes/', {
        nome: nomeRestaurante
      })
        .then(() => {
          alert("Restaurante cadastrado com sucesso!");
        });
    }
  };

  useEffect(() => {
    if (parametros.id) {
      http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then(resposta => setNomeRestaurante(resposta.data.nome));
    }
  }, [parametros]);

  return (
    < Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
      <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
      <Box component="form" onSubmit={aoSubmeterForm} sx={{ width: "100%" }}>
        <TextField
          label="Nome do Restaurante"
          variant="standard"
          value={nomeRestaurante}
          onChange={evento => setNomeRestaurante(evento.target.value)}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 1 }}
        >Salvar</Button>
      </Box>
    </Box >
  );
}

export default FormularioRestaurante;