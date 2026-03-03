import { Response, Request, response } from 'express'
import Product from '../models/product'

class ProductController {
    static async newProduct (req: Request, res: Response){
        const {name, description, price, stock, category, createdAt } = req.body
        const product = new Product({name, description, price, stock, category, createdAt } )
        await product.save()
        
        return res.status(200).send({response: `Produto ${name} cadastrado`})

    }
    static async getProductbyName (req: Request, res: Response){
        const {name} = req.params
        const products = await Product.find(name, )
        return res.status(200).send({response: products})
    }
}

export default ProductController