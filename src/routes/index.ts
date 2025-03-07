import { Router } from "express"
import { TarefaController } from "../controllers/TarefaController";

const express = require('express')
const routes = express.Router();

routes.get('/tarefa/', new TarefaController().findAll);
routes.post('/tarefa', new TarefaController().store);
routes.get('/tarefa/:id', new TarefaController().findOne);
routes.put('/tarefa/:id', new TarefaController().update);
routes.delete('/tarefa/:id', new TarefaController().delete);

export default routes;