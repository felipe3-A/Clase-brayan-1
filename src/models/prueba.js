// Exportar sequelize y crear los typos de datos
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// Exportar proyecto

export const prueba = sequelize.define('prueba', {
    // Identificar dato, tipo de dato, si es llave o no
    id: {
        type: DataTypes.INTEGER,
        // El autoincrememt permite crera nuevas direcciones cada ves que se cree un nuevo usuario
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING
    },
    surname:{
        type:DataTypes.STRING
    },
    old:{
        type:DataTypes.NUMBER
    },
    status:{
type:DataTypes.BOOLEAN
})