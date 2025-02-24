import express from 'express';

import { Router, Request, Response } from 'express';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World with Typescript!' });
});

app.use(route);

app.listen(3333, () => 'Server is running on Port 3333');