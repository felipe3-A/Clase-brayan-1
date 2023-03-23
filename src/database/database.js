// Importar sequelize y exportar mi base de datos
import { Sequelize } from "sequelize";
export const sequelize=new Sequelize('comenzar','postgres','1234567890',{
    host:'localhost',
    dialect:'postgres'
});