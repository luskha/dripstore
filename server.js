import express from "express"
import { Sequelize } from "sequelize"
import { connection } from "./db/database.js"
import { produtoRoute } from "./routes/product.routes.js"
const app = express()

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