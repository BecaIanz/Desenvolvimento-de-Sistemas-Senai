import express , {Request, Response, Router } from 'express';
// import ProductController from '../controllers/ProductController';
// import { validateRegister, validateObejctId } from '../middlewares/personMiddleware';
const router: Router = express.Router()

router
    .post('/create')
    .get('/findById/:id')
    .get('/find')
    .get('/findAll')
    .put('/update/:id')
    .delete('/remove/:id')
    // .post('/create', validateRegister,  ProductController.create)

export default router