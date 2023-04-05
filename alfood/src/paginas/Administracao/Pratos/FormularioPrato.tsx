import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IPrato";
import IRestaurante from "../../../interfaces/IRestaurante";
import ITag from "../../../interfaces/ITag";

const FormularioPrato = () => {

  const parametros = useParams();
  const navigate = useNavigate();
  const [nomePrato, setNomePrato] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tags, setTags] = useState<ITag[]>([]);
  const [tag, setTag] = useState('');
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurante, setRestaurante] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const formData = new FormData();

    formData.append('nome', nomePrato);
    formData.append('descricao', descricao);
    formData.append('tag', tag);
    formData.append('restaurante', restaurante);
    if (imagem) {
      formData.append('imagem', imagem);
    }

    let selectedMethod = '';
    let pratosURL = '';

    if (parametros.id) {
      selectedMethod = 'PUT';
      pratosURL = `pratos/${parametros.id}/`;
    }
    else {
      selectedMethod = 'POST';
      pratosURL = 'pratos/';
    }

    http.request({
      url: pratosURL,
      method: selectedMethod,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(resposta => {
        setNomePrato('');
        setDescricao('');
        setTag('');
        setRestaurante('');
        setImagem(null);
        alert(`Prato ${selectedMethod === 'PUT' ? 'atualizado' : 'cadastrado'} com sucesso`)
      })
      .then(() => {
        navigate('/admin/pratos')
      })    
      .catch(erro => console.log(erro));
  };

  const selecionarArquivo = (evento: ChangeEvent<HTMLInputElement>) => {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0]);
    } else {
      setImagem(null);
    }
  };

  useEffect(() => {
    if (parametros.id) {
      http.get<IPrato>(`pratos/${parametros.id}/`)
        .then(resposta => {
          setNomePrato(resposta.data.nome);
          setDescricao(resposta.data.descricao);
          setTag(resposta.data.tag);
          setRestaurante(resposta.data.restaurante.toString());
          //setImagem(resposta.data.imagem);
        });
    }
  }, [parametros]);

  useEffect(() => {
    http.get<{ tags: ITag[] }>('tags/')
      .then(resposta => setTags(resposta.data.tags));

    http.get<IRestaurante[]>('restaurantes/')
      .then(resposta => setRestaurantes(resposta.data));
  }, []);

  return (
    < Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
      <Typography component="h1" variant="h6">Formulário de Pratos</Typography>
      <Box component="form" onSubmit={aoSubmeterForm} sx={{ width: "100%" }}>
        <TextField
          label="Nome do Prato"
          variant="standard"
          value={nomePrato}
          onChange={evento => setNomePrato(evento.target.value)}
          margin="dense"
          fullWidth
          required
        />
        <TextField
          label="Descrição do Prato"
          variant="standard"
          value={descricao}
          onChange={evento => setDescricao(evento.target.value)}
          margin="dense"
          fullWidth
          required
        />
        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
            {tags.map(tag =>
              <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-tag">Restaurante</InputLabel>
          <Select labelId="select-tag" value={restaurante} onChange={evento => setRestaurante(evento.target.value)}>
            {restaurantes.map(restaurante =>
              <MenuItem key={restaurante.id} value={restaurante.id}>
                {restaurante.nome}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <input type="file" onChange={selecionarArquivo} />
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

export default FormularioPrato;