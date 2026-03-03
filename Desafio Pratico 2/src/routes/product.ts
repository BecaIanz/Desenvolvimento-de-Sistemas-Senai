import express , {Request, Response, Router } from 'express';
import PersonController from '../controllers/ProductController';
import { validateRegister } from '../middlewares/personMiddleware';
const router: Router = express.Router()

router
    .post('/cadastro', validateRegister,  PersonController.newProduct)
    .get('/produtos/:name',  PersonController.getProduct)

export default router