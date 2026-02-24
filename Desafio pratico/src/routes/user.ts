import express , {Request, Response, Router } from 'express';

interface user{
    id: number;
    nome: string;
    email: string;
    tipo: "aluno" | "professor" | "coordenador";
    ativo: boolean;
    createdAt: Date;
}

const router: Router = express.Router()
const users: user[] = []

router
    .post('/cadastro', (req: Request, res: Response) => {
        const {id, nome, email, tipo, ativo} = req.body
        const createdAt = new Date()

        if(users.find((u) => u.id == id)){
            return res.status(500).send({ response: "Usuário já registrado" })
        }
        users.push({id, nome, email, tipo, ativo, createdAt})
        return res.status(200).send({message: `Usuário ${nome} cadastrado com sucesso`})
    }) 
    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({users : users})
    })
    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertId = Number(id)
        const user = users.find((u) => u.id == convertId)
        if(!user){
            return res.status(404).send({ response: "Usuário não encontrado"})
        }
        res.status(200).send({response: user})
    })
    .get('/usuarios/filtro/:tipo', (req: Request, res: Response) => {
        const { tipo } = req.params
        const user = users.filter((u) => u.tipo == tipo)
        res.status(200).send({response: user})
    })
    .put('/atualizar/:id', (req:Request, res:Response) => {
        const {id} = req.params
        let convertId = Number(id)
        const {nome, email, tipo, ativo} = req.body
        const user = users.find((u) => u.id == convertId)
        if(user){
            user.nome = nome
            user.email = email
            user.tipo = tipo
            user.ativo = ativo
            return res.status(200).send({ response: `Usuário ${nome} atualizado`})
        }
        else{
            return res.status(404).send({ response: `Usuário não encontrado`})
        }
    })
    .patch('/atualizarparcial/:id', (req: Request, res: Response) => {
        const {id} = req.params
        const {nome, email, tipo, ativo} = req.body
        let convertId = Number(id)
        const user = users.find((u) => u.id == convertId)

        if(!user){
            return res.status(404).send({ response: `Usuário não encontrado`})
        }
        if(nome)
        {user.nome = nome}
        if(email)
        {user.email = email}
        if(tipo)
        {user.tipo = tipo}
        if(ativo)
        {user.ativo = ativo}
    

    })
    .delete("/deletar/:id", (req:Request, res:Response) => {
        const {id} = req.params
        let convertId = Number(id)
        const user = users.find((u) => u.id == convertId)
        if(user){
            users.splice(convertId - 1, 1)
        }
        res.status(200).send({response: `Deletando usuario ${id}`})
        // splice
    })

export default router