import { Express } from 'express'
import express from 'express'
import auth from './auth.ts'
import project from './project.ts'

export default function (app: Express) {
    app
       .use(express.json())
       .use('/api/products', project)
       .use('/api/auth', auth)

}