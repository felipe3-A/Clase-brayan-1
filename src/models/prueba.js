// Exportar sequelize y crear los typos de datos
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Tareas} from './task.js'
// Exportar proyecto

export const Proyectos = sequelize.define('proyectos', {
    // Identificar dato, tipo de dato, si es llave o no
    id: {
        type: DataTypes.INTEGER,
        // El autoincrememt permite crera nuevas direcciones cada ves que se cree un nuevo usuario
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: true,
});

Proyectos.hasMany = (Tareas, {
    foreignkey: 'proyectoId',
    sourceKey: 'id'
})
// Relacion entre tablas
Tareas.belongsTo(Proyectos, {
    foreignkey: 'proyectoId',
    targetid: 'id'
})