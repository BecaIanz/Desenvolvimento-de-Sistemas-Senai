import { Express } from 'express'
import express from 'express'
import users from './product.ts'

export default function (app: Express) {
    app
       .use(express.json())
       .use('/api/products', users)

}