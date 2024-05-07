import express from "express"
import { Sequelize } from "sequelize"
import { connection } from "./db/database.js"
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

const sequelize = new Sequelize('postgresql://dripstore_db_owner:Ut3dhFCn9wyA@ep-winter-dew-a5niat7j.us-east-2.aws.neon.tech/dripstore_db?sslmode=require')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log('Unable to connect to the database:' , error)
}

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})