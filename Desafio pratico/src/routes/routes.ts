import { Express } from 'express'
import express from 'express'
import users from './user.ts'

export default function (app: Express) {
    app
       .use(express.json())
       .use('/api/users', users)

}