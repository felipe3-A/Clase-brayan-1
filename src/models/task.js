import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'

export const Tareas = sequelize.define('tareas', {
    // Permitir qie el id se genere autonamtico y se auto_incremente como llave primaria
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrement: true
    },

    name: { type: DataTypes.STRING },
    done: { type: DataTypes.BOOLEAN ,defaultValue:false}, 
}, {
    timestamps: false
})