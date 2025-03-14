import { Router } from "express"
import { UserController } from "../controllers/UserController";

const express = require('express')
const routes = express.Router();

routes.get('/users/', new UserController().findAll);
routes.post('/users', new UserController().store);
routes.get('/users/:id', new UserController().findOne);
routes.put('/users/:id', new UserController().update);
routes.delete('/users/:id', new UserController().delete);

export default routes;