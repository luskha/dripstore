import express from 'express'
import { produtoServices } from '../services/produtos.service.js'

export const produtoRoute = (app) => {
    const route = express.Router()

    route.get('/', produtoServices.getAll);
    route.get('/:id', produtoServices.getById);

    app.use('/api/produto', route)
}