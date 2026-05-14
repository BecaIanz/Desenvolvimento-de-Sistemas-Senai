import { Response, Request, response } from 'express'
import Product from '../models/product'
import { findProductDTO, registerProductDTO } from '../DTO/productDTO'
import { find, findAll, findById, register } from '../Services/product.service'

class ProductController {
    static async create (req: Request, res: Response){
        const data: registerProductDTO = req.body
        try{
            await register(data)
            return res.status(201).send({ message: "Produto adicionado com sucesso"})
        }
        catch{
            return res.status(500).send({ message: "Ta errado em algum lugar meu chapa"})
        }
    }
    static async findAll (req: Request, res: Response){
        const data: findProductDTO = req.body
        try{
            const product = await findAll(data)
            return res.status(200).send({response: product})
        }
        catch{
            return res.status(500).send({ message: "Ta errado em algum lugar meu chapa"})
        }
    }
    static async findById (req: Request, res: Response){
        const data: findProductDTO = req.body
        try{
            const product = await findById(data)
            return res.status(200).send({response: product})
        }
        catch{
            return res.status(404).send({response: "Não achei o produto meu caro"})

        }
    }
    static async find (req: Request, res: Response){
        const data: findProductDTO = req.body
        try{
            const products = await find(data)
            res.status(200).send({users : products})
        }
        catch{
            return res.status(404).send({response: "Não achei o produto meu caro"})
        }
    }
    static async update (req: Request, res: Response){
        const {id} = req.params
        const {name, description, price, stock, category} = req.body
        try{
            await Product.findByIdAndUpdate(id , { name, description, price, stock, category})
            const product = await Product.findById(id)
            return res.status(200).send({response: product})
        }
        catch{
            return res.status(404).send({ response: `Usuário não encontrado!`})
        }
    }
    static async remove (req: Request, res: Response){
        const {id} = req.params
        try{
            await Product.findByIdAndDelete(id)
            return res.status(200).send({response: `Usuário deletado`})
        }
        catch{
            return res.status(404).send({ response: `Usuário não encontrado!`})
        }
    }
}

export default ProductController