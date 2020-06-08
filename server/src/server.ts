import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// Rota: é o endereço completo da requisição
// Recurso: qual entidade estamos acessando

//GET: Buscar uma ou mais informações do back-end
//POST: criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

// Request Param: Paramêtros que vem na própria rota que identificam um recurso
// Query Param: Paramêtros que vem na própria rota geralmente opcional que é usada para filtro paginação
// Request Body: Paramêtros para criação/atualização de informações

