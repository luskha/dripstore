import express from 'express'
import { produtoServices } from '../services/produtos.service.js'

export const produtoRoute = (app) => {
    const route = express.Router()

    route.get('/', produtoServices.getAll);
    route.get('/:id', produtoServices.getById);
    route.post('/', produtoServices.create);
    route.put('/:id', produtoServices.update);
    route.delete('/:id', produtoServices.delete);

    app.use('/api/produto', route)
}