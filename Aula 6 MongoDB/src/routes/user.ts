import express , {Request, Response, Router } from 'express';
import Person from '../models/person.ts'
const router: Router = express.Router()

router
    .post('/cadastro', async (req: Request, res: Response) => {
        const {name, lastName, age} = req.body
        const person = new Person({name, lastName, age})

        await person.save()
        
        res.status(200).send({response: `Usuário ${name} cadastrado`})

    }) 
    .get('/usuarios', async (req: Request, res: Response) => {
        try {
            const people = await Person.find();
            res.status(200).json(people);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pessoas', error });
        }
    })
    // .get('/usuarios/:id', (req: Request, res: Response) => {
    //     const { id } = req.params
    //     let convertId = Number(id)
    // })
    // .get('/usuarios/filtro/:tipo', (req: Request, res: Response) => {
    //     const { tipo } = req.params
    // })
    // .put('/atualizar/:id', (req:Request, res:Response) => {
    //     const {id} = req.params
    //     let convertId = Number(id)
    //     const {nome, email, tipo, ativo} = req.body
        
    // })
    // .patch('/atualizarparcial/:id', (req: Request, res: Response) => {
    //     const {id} = req.params
    //     const {nome, email, tipo, ativo} = req.body
    //     let convertId = Number(id)

    //     res.status(200).send({response: `Usuário ${id} atualizado`})
    

    // })
    // .delete("/deletar/:id", (req:Request, res:Response) => {
    //     const {id} = req.params
    //     let convertId = Number(id)
    //     res.status(200).send({response: `Deletando usuario ${id}`})
    // })

export default router