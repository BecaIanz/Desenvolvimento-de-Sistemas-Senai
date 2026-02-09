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

export default router