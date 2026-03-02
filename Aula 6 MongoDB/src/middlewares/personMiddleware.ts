import { NextFunction, Request, Response} from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, lastName, age } = req.body
    if(!name || !lastName || !age){
        return res.status(400).send({response: `Preencha todos os campos para prosseguir!`})
    }
    next()
}