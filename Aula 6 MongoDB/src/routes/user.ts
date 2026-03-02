import express , {Request, Response, Router } from 'express';
import PersonController from '../controllers/personController';
import { validateRegister } from '../middlewares/personMiddleware';
const router: Router = express.Router()

router
    .get('/usuarios',PersonController.getUsers)
    .post('/cadastro', validateRegister,  PersonController.newUser)
    .put('/atualizar/:id', PersonController.updateUser)
    .delete('/deletar/:id', PersonController.deleteUser)

export default router