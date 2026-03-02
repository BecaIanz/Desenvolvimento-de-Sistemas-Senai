import express , {Request, Response, Router } from 'express';
import PersonController from '../controllers/personController';
const router: Router = express.Router()

router
    .get('/usuarios', PersonController.getUsers)
    .post('/cadastro', PersonController.newUser)
    .put('/atualizar/:id', PersonController.updateUser)
    .delete('/deletar/:id', PersonController.deleteUser)

export default router