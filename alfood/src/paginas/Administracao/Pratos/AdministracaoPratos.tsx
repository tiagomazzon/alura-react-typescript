import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IPrato";

const AdministracaoPratos = () => {
  const [Pratos, setPratos] = useState<IPrato[]>([]);

  const excluir = (pratoASerExcluido: IPrato) => {
    http.delete(`pratos/${pratoASerExcluido.id}/`)
      .then(() => {
        const listaPrato = Pratos.filter(prato => prato.id !== pratoASerExcluido.id);
        setPratos([...listaPrato]);
      })
  }

  useEffect(() => {
    http.get<IPrato[]>('pratos/')
      .then(resposta => setPratos(resposta.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Tag
            </TableCell>
            <TableCell>
              Imagem
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
            <TableCell>
              Excluir
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Pratos.map(prato =>
            <TableRow key={prato.id}>
              <TableCell>
                {prato.nome}
              </TableCell>
              <TableCell>
                {prato.tag}
              </TableCell>
              <TableCell>
                <a href={prato.imagem} target="_blank" rel="noreferrer">Ver Imagem</a>
              </TableCell>
              <TableCell>
                [<Link to={`/admin/pratos/${prato.id}`}>Editar</Link>]
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={() => excluir(prato)}>Excluir</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdministracaoPratos;