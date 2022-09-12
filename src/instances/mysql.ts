import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD,
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
        //Espera um número
        //mas é uma string, o parseInt turn to a number
    }
);