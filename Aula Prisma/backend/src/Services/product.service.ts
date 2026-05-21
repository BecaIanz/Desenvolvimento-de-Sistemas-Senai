import { findProductDTO, registerProductDTO } from "../DTO/productDTO";
import Product from "../models/product";

export async function register(data: registerProductDTO){
    const {name, description, price, stock, category} = data
    const createdAt = new Date()
    const product = new Product({name, description, price, stock, category, createdAt } )
    return await product.save()
}

export async function findAll(data: findProductDTO) {
    const convertedMinPrice = Number(data.minPrice)
    const convertedMaxPrice = Number(data.maxPrice)
    const product = await Product.find({
        name: data.name,
        category: data.category,
        price: { $gte: convertedMinPrice, $lte: convertedMaxPrice },
        stock: { $gt: 0}
    })
    return product
}

export async function findById(data: findProductDTO){
    const {id} = data
    const product = await Product.findById(id)
    return product
}

export async function find(data: findProductDTO){
    const products = await Product.find()
}