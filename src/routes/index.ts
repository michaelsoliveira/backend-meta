import { Router } from "express"
import { TarefaController } from "../controllers/TarefaController";

const routes = Router();

routes.get('/tarefa', new TarefaController().findAll);

export default routes;