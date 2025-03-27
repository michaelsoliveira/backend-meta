import { Router } from "express"
import { UserController } from "../controllers/UserController";
import { AuthController } from "../controllers/AuthController";
import { Authentication } from "../middleware/auth.middleware";

const express = require('express')
const routes = express.Router();

routes.get('/users/', Authentication() ,new UserController().findAll);
routes.post('/users', new UserController().store);
routes.get('/users/:id', new UserController().findOne);
routes.put('/users/:id', new UserController().update);
routes.delete('/users/:id', new UserController().delete);

routes.post('/auth/login', new AuthController().login)

export default routes;