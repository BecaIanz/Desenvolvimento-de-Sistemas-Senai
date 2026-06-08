import { Request, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { deleteUser, getUserById, registerUser, showUsers, updateUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            await registerUser(data)
            return res.status(200).send({response: "Usuário registrado com sucesso!"})
        }
        catch(e){
            return res.status(500).send({response: "Ocorreu algum erro no servidor"})
        }
    }

    static async show(req: Request, res: Response){
        try{
            await showUsers()
            return res.status(404).send({response: "Nenhum usuario encontrado"})
        }
        catch(e){
        }
    }
    static async getById(req: Request, res: Response){
        const {id} = req.params
        try{
            await getUserById(Number(id))
            return res.status(404).send({response: "Nenhum usuario encontrado"})
        }
        catch(e){
        }
    }
    static async update(req: Request, res: Response){
        const {id} = req.params
        const data: updateUserDto = req.body
        try{
            await updateUser(data, Number(id))
            return res.status(200).send({response: "Usuario atualizado"})
        }
        catch(e){
            return res.status(500).send({response: "Erro no Servidor"})
        }
    }

    static async delete(req: Request, res: Response){
        const {id} = req.params
        try{
            await deleteUser(Number(id))
            return res.status(200).send({response: "Usuario deletado com sucesso"})
        }
        catch(e){
            return res.status(500).send({response: "Erro no servidor"})
        }
    }
}
