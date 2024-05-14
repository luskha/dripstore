import { Sequelize } from "sequelize";
import { sequelize } from "./db.js";

// const sequelize = new Sequelize('postgresql://dripstore_db_owner:Ut3dhFCn9wyA@ep-winter-dew-a5niat7j.us-east-2.aws.neon.tech/dripstore_db?sslmode=require')


export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database:' , error)
    }
}
