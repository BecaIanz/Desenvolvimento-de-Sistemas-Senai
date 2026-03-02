import { Response, Request, response } from 'express'
import Person from '../models/person'

class PersonController {
    static async getUsers(req: Request, res: Response){
        const users = await Person.find()
        return res.status(200).send({response: users})
    }
    static async newUser(req: Request, res: Response){
        const {name, lastName, age} = req.body
        const person = new Person({name, lastName, age})
        await person.save()
        
        return res.status(200).send({response: `Usuário ${name} cadastrado`})

    }
    static async updateUser(req: Request, res: Response){
        const {id} = req.params
        const {name, lastName, age} = req.body
     
        try{
            await Person.findByIdAndUpdate(id , { name, lastName, age })
            return res.status(200).send({response: `Usuário ${name} atualizado!`})
        }
        catch{
            return res.status(404).send({ response: `Usuário não encontrado!`})
        }
    }
    static async deleteUser(req: Request, res: Response){
        const {id} = req.params
        try{
            await Person.findByIdAndDelete(id)
            return res.status(200).send({response: `Usuário deletado`})
        }
        catch{
            return res.status(404).send({ response: `Usuário não encontrado!`})
        }
    }
}

export default PersonController