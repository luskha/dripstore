import express from "express"
import { Sequelize } from "sequelize"
import { connection } from "./db/database.js"
import { produtoRoute } from "./routes/product.routes.js"
import winston from 'winston'
import cors from 'cors'
const app = express()

app.use(cors())

const HOST = 'localhost'
const PORT = 5000

connection()

app.get('/', (req, res) => {
  res.send({
    message:'Servidor no ar',
    status: 200
    })
})

produtoRoute(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})