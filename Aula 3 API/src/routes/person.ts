import express, {Request, Response, Router } from 'express'

const router: Router = express.Router()
const people: object[]= []

router
    .post('/cadastro', (req: Request, res: Response) => {
        const {nome, sobrenome, idade} = req.body
        people.push({nome, sobrenome, idade})
        res.status(200).send({message: `Usuário ${nome} cadastrado com sucesso`})
    })
    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({users : people})
    })
    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertId = Number(id)

        res.status(200).send({response: people[convertId]})
    })
    .put("/atualizar/:id",  (req:Request, res:Response) => {
        const { id } = req.params
        const { nome, idade } = req.body
        res.status(200).send({response: `Atualizando usuario ${id} -> ${nome} - ${idade}`})

    })
    .delete("/deletar/:id", (req:Request, res:Response) => {
        const { id } = req.params
        res.status(200).send({response: `Deletando usuario ${id}`})

    })

export default router