import { Router } from "express";
import UserController from './controllers/FilmsController';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World!')
});

routes.get('/films', UserController.index);

routes.get('/films/create', UserController.create);

export default routes;